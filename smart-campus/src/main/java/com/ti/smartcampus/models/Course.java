package com.ti.smartcampus.models;


import com.ti.smartcampus.models.constants.CourseType;
import com.ti.smartcampus.models.constants.DurationType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */

@Entity
@Table(name = "courses")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Course extends Base {

    @Id
    @Column(name = "course_id")
    private String id;

    @Column(name = "course_code")
    private String courseCode;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "intake")
    private Integer intake;

    @Column(name = "course_type")
    private CourseType type;

    @Column(name = "duration")
    private Integer duration;

    @Enumerated(EnumType.STRING)
    @Column(name = "duration_type")
    private DurationType durationType;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "entity_id")
    private Integer entityId;

    @Column(name = "sub_entity_id")
    private Integer subEntityId;

}
