package com.ti.security;

import com.ti.exceptions.ApiException;
import com.ti.exceptions.UnauthorizedException;
import com.ti.models.constants.UserType;
import com.ti.repositories.TokenLogRepository;
import com.ti.repositories.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Collections;
import java.util.Date;

/**
 * @author Azam
 */

@Service
@RequiredArgsConstructor
public class TokenService {

    @Value("${security.jwt.authUrl}")
    private String authUrl;

    @Value("${security.jwt.header}")
    private String header;

    @Value("${security.jwt.prefix}")
    private String prefix;

    @Value("${security.jwt.secret}")
    private String secret;

    @Value("${security.jwt.expiration}")
    private Long expiration;

    private final TokenLogService tokenLogService;

    private final TokenLogRepository tokenLogRepository;

    private final UserRepository userRepository;

    public String getAuthUrl() {
        return authUrl;
    }

    public String getHeader() {
        return header;
    }

    public String getPrefix() {
        return prefix;
    }

    public String generateJwt(Token token, String ip) {
        final Date createdDate = new Date();
        final Date expirationDate = new Date(createdDate.getTime() + expiration * 1000);
        final LocalDateTime expirationDate2 = LocalDateTime.now().plusSeconds(expiration);

        int tokenLogId = tokenLogService.createLoginLog(token.getUserId(), token.getEmail(), token.getUserType(), expirationDate2, ip);

        String jwt = Jwts.builder()
                .setSubject(token.getSub() + "")
                .setIssuedAt(createdDate)
                .setExpiration(expirationDate)
                .claim("userId", token.getUserId())
                .claim("userName", token.getUserName())
                .claim("userType", token.getUserType().toString())
                .claim("email", token.getEmail())
                .claim("tokenLogId", tokenLogId)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();

        TokenLog tokenLog = tokenLogService.getTokenLogById(tokenLogId);
        tokenLog.setToken(jwt);
        tokenLogRepository.save(tokenLog);

        return jwt;
    }

    public Token verifyJwt(String token) {

        Claims claims = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();

        Token tokenBody = new Token();
        tokenBody.setSub(claims.getSubject());
        tokenBody.setUserId((String) claims.get("userId"));
        tokenBody.setUserName((String) claims.get("userName"));
        tokenBody.setEmail((String) claims.get("email"));
        tokenBody.setUserType(UserType.valueOf(claims.get("userType").toString()));

        tokenBody.setTokenLogId((int) claims.get("tokenLogId"));

        TokenLog ol = tokenLogService.getTokenLogById(tokenBody.getTokenLogId());
        if (ol.getIsValid() != 1) {
            throw new UnauthorizedException("Unauthorized");
        }

        return tokenBody;
    }

    public Token verifyJwt(HttpServletRequest request) {
        // 1. get the authentication header. Tokens are supposed to be passed in the
        // authentication header
        String header = request.getHeader((getHeader()));
        // 2. validate the header and check the prefix
        if (header == null || !header.startsWith(getPrefix())) {
            // throw new ApiException("Token expired. Please login again");
            throw new ApiException("");
        }

        // 3. Get the token
        String token = header.replace(getPrefix(), "");
        return verifyJwt(token);
    }


}
