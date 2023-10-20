package com.ti.smartcampus.controllers;

import com.ti.smartcampus.models.constants.RoleType;
import com.ti.smartcampus.models.dtos.common.CommonDto;
import com.ti.smartcampus.models.dtos.common.UserDto;
import com.ti.smartcampus.models.dtos.requests.StudentRequest;
import com.ti.smartcampus.models.dtos.responses.StudentResponse;
import com.ti.smartcampus.security.TokenService;
import com.ti.smartcampus.services.StudentService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Azam
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/student/")
public class StudentController {

    public final TokenService tokenService;
    public final StudentService studentService;

    @GetMapping("admission-request/list")
    public Page<StudentResponse> getAdmissionRequests(HttpServletRequest request, Pageable pageable,
                                                     @RequestParam(required = false) String admissionNumber){
        UserDto userDto = tokenService.verifyAccess(request, List.of(RoleType.ADMIN.name()));
        return studentService.getAdmissionRequestList(pageable, userDto, admissionNumber);

    }

    @GetMapping("{admissionId}")
    public StudentResponse getAdmissionRequest(HttpServletRequest request, @PathVariable String admissionId){
        tokenService.verifyAccess(request, List.of(RoleType.ADMIN.name()));
        return studentService.getAddmissionRequestById(admissionId);
    }

    @PostMapping("admission-request")
    public CommonDto admissionRequest(HttpServletRequest request, @Valid @RequestBody StudentRequest studentRequest) {
        UserDto userDto = tokenService.verifyAccess(request, List.of(RoleType.ADMIN.name(), RoleType.STUDENT.name()));
        String studentId = studentService.saveAdmissionRequest(userDto, studentRequest);
        return new CommonDto("Your student id is : " + studentId);
    }


}
