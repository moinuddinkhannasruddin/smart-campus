package com.ti.models;

import com.ti.models.constants.Gender;
import com.ti.models.constants.StudentStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.management.relation.Relation;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * @author Azam
 */
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "students")
@Builder
@AllArgsConstructor
public class Student extends Base{

    @Id
    @Column(name = "student_id")
    private String id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "contact")
    private String contact;

    @Column(name = "alternate_contact")
    private Long alternateContact;

    @Email
    @Column(name = "email")
    private String email;

    @Column(name = "age")
    private Integer age;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private StudentStatus status;

    @Column(name = "addmission_date")
    private LocalDateTime admissionDate;

    @Column(name = "addmission_number")
    private String admissionNumber;

}
