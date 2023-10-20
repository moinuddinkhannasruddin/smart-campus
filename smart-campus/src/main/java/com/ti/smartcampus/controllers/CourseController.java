package com.ti.smartcampus.controllers;

import com.ti.smartcampus.models.Course;
import com.ti.smartcampus.models.constants.RoleType;
import com.ti.smartcampus.models.dtos.common.CommonDto;
import com.ti.smartcampus.models.dtos.common.UserDto;
import com.ti.smartcampus.models.dtos.requests.CourseRequest;
import com.ti.smartcampus.models.dtos.responses.CourseResponse;
import com.ti.smartcampus.security.TokenService;
import com.ti.smartcampus.services.CourseService;
import com.ti.smartcampus.utils.ClassUtil;
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

/**
 * @author Azam
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/course/")
public class CourseController {

    public final TokenService tokenService;
    private final CourseService courseService;

    @PostMapping("")
    public CommonDto addCourse(HttpServletRequest request, @Valid @RequestBody CourseRequest courseRequest) {
        UserDto userDto = tokenService.verifyAccess(request, List.of(RoleType.ADMIN.name()));
        return courseService.addCourse(userDto, courseRequest);
    }

    @GetMapping("{courseId}")
    public CourseResponse getCourse(HttpServletRequest request, @PathVariable String courseId) {
        UserDto userDto = tokenService.verifyAccess(request, List.of(RoleType.ADMIN.name()));
        Course course = courseService.getCourseById(courseId);
        return ClassUtil.convert(course, CourseResponse.class);
    }

    @PutMapping("{courseId}")
    public CommonDto updateCourse(HttpServletRequest request, @PathVariable String courseId, @Valid @RequestBody CourseRequest courseRequest) {
        UserDto userDto = tokenService.verifyAccess(request, List.of(RoleType.ADMIN.name()));
        return courseService.updateCourse(courseId, userDto.getId(), courseRequest);
    }

    @GetMapping("list")
    public Page<CourseResponse> getCourses(HttpServletRequest request, Pageable pageable,
                                           @RequestParam(required = false) Integer entityId,
                                           @RequestParam(required = false) Integer subEntityId,
                                           @RequestParam(required = false) String userId,
                                           @RequestParam(required = false) String courseCode,
                                           @RequestParam(required = false) String courseName,
                                           @RequestParam(required = false) String type) {
        UserDto userDto = tokenService.verifyAccess(request, List.of(RoleType.ADMIN.name(), RoleType.STUDENT.name()));

        return courseService.getCourses(pageable, entityId, subEntityId, userId, courseCode, courseName, type);
    }

}
