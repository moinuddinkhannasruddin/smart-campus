package com.ti.smartcampus.services;

import com.ti.smartcampus.exceptions.DataNotFoundException;
import com.ti.smartcampus.exceptions.errors.CourseErrors;
import com.ti.smartcampus.models.Course;
import com.ti.smartcampus.models.dtos.common.CommonDto;
import com.ti.smartcampus.models.dtos.common.UserDto;
import com.ti.smartcampus.models.dtos.requests.CourseRequest;
import com.ti.smartcampus.models.dtos.responses.CourseResponse;
import com.ti.smartcampus.repositories.CoursesRepository;
import com.ti.smartcampus.repositories.specification.GenericSpecification;
import com.ti.smartcampus.repositories.specification.SearchCriteria;
import com.ti.smartcampus.utils.ClassUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

/**
 * @author Azam
 */

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CoursesRepository coursesRepository;

    public CommonDto addCourse(UserDto userDto, CourseRequest courseRequest) {
        Course course = ClassUtil.convert(courseRequest, Course.class);
        course.setCreatedBy(userDto.getId());
        course.setCreatedAt(LocalDateTime.now());
        course = coursesRepository.save(course);
        return new CommonDto("Course added successfully." + course.getCourseName());
    }

    public CommonDto updateCourse(String courseId, String userId, CourseRequest courseRequest) {
        Course course = this.getCourseById(courseId);
        course.setCourseCode(courseRequest.getCourseCode());
        course.setCourseName(courseRequest.getCourseName());
        course.setIntake(course.getIntake());
        course.setType(courseRequest.getType());
        course.setDuration(courseRequest.getDuration());
        course.setDurationType(courseRequest.getDurationType());
        course.setUpdatedBy(userId);
        course.setUpdatedAt(LocalDateTime.now());
        course = coursesRepository.save(course);
        return new CommonDto("Course added successfully." + course.getCourseName());
    }

    public Course getCourseById(String courseId) {
        return coursesRepository.findById(courseId).orElseThrow(() -> new DataNotFoundException(CourseErrors.getErrorDetails(CourseErrors.CE401)));
    }

    public Page<CourseResponse> getCourses(Pageable pageable, Integer
            entityId, Integer subEntityId, String userId, String courseCode, String courseName, String courseType) {
        GenericSpecification<Course> cs = new GenericSpecification<>(new SearchCriteria("entityId", ":", entityId));

        Specification<Course> spec = Specification.where(cs);

        if (subEntityId != null) {
            spec = spec.and(new GenericSpecification<>(new SearchCriteria("subEntityId", ":", subEntityId)));
        }

        if (userId != null && !userId.isEmpty()) {
            spec = spec.and(new GenericSpecification<>(new SearchCriteria("userId", ":", userId)));
        }

        if (courseCode != null && !courseCode.isEmpty()) {
            spec = spec.and(new GenericSpecification<>(new SearchCriteria("courseCode", ":", courseCode)));
        }

        if (courseName != null && !courseName.isEmpty()) {
            spec = spec.and(new GenericSpecification<>(new SearchCriteria("courseName", ":", courseName)));
        }

        if (courseType != null && !courseType.isEmpty()) {
            spec = spec.and(new GenericSpecification<>(new SearchCriteria("type", ":", courseType)));
        }

        Page<Course> courses = coursesRepository.findAll(spec, pageable);

        return ClassUtil.convertPage(courses, CourseResponse.class);
    }
}
