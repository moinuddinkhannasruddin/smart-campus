package com.ti.controllers;

import com.ti.models.dtos.requests.LoginRequest;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Azam
 */
@RestController
@RequestMapping("/test/")
public class TestController {

    @GetMapping("hi")
    public String login(){
        return "welcome";
    }
}
