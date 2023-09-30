package com.ti.security;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/**
 * @author Azam
 */

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityTokenConfig {

    private final TokenService tokenService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(AbstractHttpConfigurer::disable)
                // make sure we use stateless session; session won't be used to store user's
                // state.
                .sessionManagement((session) -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                )
                .exceptionHandling(exception -> exception
                        .authenticationEntryPoint((req, res, e) -> res.sendError(HttpServletResponse.SC_UNAUTHORIZED)))
                // handle an authorized attempts
                // Add a filter to validate the tokens with every request
                .addFilterAfter(new JwtTokenAuthenticationFilter(tokenService), UsernamePasswordAuthenticationFilter.class)
                // authorization requests config
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(
                                new AntPathRequestMatcher(tokenService.getAuthUrl()),
                                new AntPathRequestMatcher("/**/test/**/")
                        ).permitAll()
                        .anyRequest()
                        .authenticated());
        // allow all who are accessing "auth" service
        // must be an admin if trying to access admin area (authentication is also
        // required here)
        // Any other request must be authenticated

        return http.build();
    }
}
