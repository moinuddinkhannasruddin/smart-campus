package com.ti.controllers;

import com.ti.models.dtos.common.CommonDto;
import com.ti.models.dtos.requests.UserRequest;
import com.ti.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Azam
 */
@RestController
@RequestMapping("/v1/user/")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("")
    public CommonDto createUser(@Valid @RequestBody UserRequest userRequest){
        userService.saveUser(userRequest);
        return new CommonDto();
    }
}
