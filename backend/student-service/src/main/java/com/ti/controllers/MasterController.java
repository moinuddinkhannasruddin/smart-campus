package com.ti.controllers;

import com.ti.models.dtos.common.CommonDto;
import com.ti.models.dtos.common.UserDto;
import com.ti.models.dtos.requests.CourseRequest;
import com.ti.models.dtos.responses.CourseResponse;
import com.ti.services.AuthService;
import com.ti.services.CourseService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.ti.models.constants.RoleType.ADMIN;
import static com.ti.models.constants.RoleType.STUDENT;

/**
 * @author Azam
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/master/")
public class MasterController {

    public final AuthService authService;
    private final CourseService courseService;

    @PostMapping("course")
    public CommonDto addCourse(HttpServletRequest request, @Valid @RequestBody CourseRequest courseRequest){
        UserDto userDto = authService.validateToken(request, List.of(ADMIN.name()));
        return courseService.addCourse(userDto, courseRequest);
    }

    @PutMapping("course/{courseId}")
    public CommonDto updateCourse(HttpServletRequest request,@PathVariable String courseId, @Valid @RequestBody CourseRequest courseRequest){
        UserDto userDto = authService.validateToken(request, List.of(ADMIN.name()));
        return courseService.updateCourse(courseId, userDto.getId(), courseRequest);
    }

    @GetMapping("course/list")
    public Page<CourseResponse> getCourses(HttpServletRequest request, Pageable pageable,
                                           @RequestParam(required = false) Integer entityId,
                                           @RequestParam(required = false) Integer subEntityId,
                                           @RequestParam(required = false) String userId,
                                           @RequestParam(required = false) String courseCode,
                                           @RequestParam(required = false) String courseName,
                                           @RequestParam(required = false) String type){
        UserDto userDto = authService.validateToken(request, List.of(ADMIN.name(), STUDENT.name()));

        return courseService.getCourses(pageable, entityId, subEntityId, userId, courseCode, courseName, type);
    }

}
