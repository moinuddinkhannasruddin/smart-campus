package com.ti.smartcampus.models.dtos.responses;

import com.ti.smartcampus.models.Course;
import com.ti.smartcampus.models.constants.CourseType;
import com.ti.smartcampus.models.constants.DurationType;
import com.ti.smartcampus.utils.ClassUtil;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;

/**
 * @author Azam
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CourseResponse {

    private String courseCode;
    private String courseName;
    private Integer intake;
    private CourseType type;
    private Integer duration;
    private DurationType durationType;
    private LocalDateTime createdAt;
    private String createdBy;
    private LocalDateTime updatedAt;
    private String updatedBy;


    public static Page<CourseResponse> toPageDto(Page<Course> courses) {
        return courses.map(course -> {
            CourseResponse courseResponse = ClassUtil.convert(course, CourseResponse.class);
            return courseResponse;
        });
    }

}
