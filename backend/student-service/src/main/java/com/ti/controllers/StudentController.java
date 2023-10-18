package com.ti.controllers;

import com.ti.models.constants.RoleType;
import com.ti.models.dtos.common.CommonDto;
import com.ti.models.dtos.common.UserDto;
import com.ti.models.dtos.requests.StudentRequest;
import com.ti.services.AuthService;
import com.ti.services.StudentService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.ti.models.constants.RoleType.ADMIN;
import static com.ti.models.constants.RoleType.STUDENT;

/**
 * @author Azam
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/students/")
public class StudentController {

    public final AuthService authService;
    public final StudentService studentService;

    @PostMapping("admission-request")
    public CommonDto admissionRequest(HttpServletRequest request, @Valid @RequestBody StudentRequest studentRequest) {
        UserDto userDto = authService.validateToken(request, List.of(ADMIN.toString(), STUDENT.toString()));
        String studentId = studentService.save(studentRequest);
        return new CommonDto("Your student id is : " + studentId);
    }



}
