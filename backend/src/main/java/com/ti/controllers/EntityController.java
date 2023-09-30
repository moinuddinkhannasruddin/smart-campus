package com.ti.controllers;

import com.ti.security.TokenService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Azam
 */
@RestController
@RequestMapping("/v1/entity/")
@RequiredArgsConstructor
public class EntityController {

    private final TokenService tokenService;

    @GetMapping("hi")
    public String login(HttpServletRequest request){
        tokenService.verifyAccess(request, List.of("ACCOUNTANT"));
//        tokenService.verifyUserType(token);
        return "welcome";
    }
}
