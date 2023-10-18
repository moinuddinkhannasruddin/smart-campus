package com.ti.models.dtos.requests;

import com.ti.models.constants.CourseType;
import com.ti.models.constants.DurationType;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */

@Getter
@Setter
@NoArgsConstructor
public class CourseRequest {

    @NotEmpty(message = "Course code is required. Please provide your course code.")
    private String courseCode;

    @NotEmpty(message = "Course name is required. Please provide your course name.")
    private String courseName;

    @NotEmpty(message = "Course intake is required. Please provide your course intake.")
    private Integer intake;

    @NotNull(message = "Course type is required. Please provide your course type.")
    private CourseType type;

    @NotEmpty(message = "Course duration is required. Please provide your course duration.")
    private Integer duration;

    @NotNull(message = "Course duration type is required. Please provide your course duration type.")
    private DurationType durationType;

    private Integer entityId;

    private String subEntityId;


}