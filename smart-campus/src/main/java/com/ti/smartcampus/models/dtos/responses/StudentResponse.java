package com.ti.smartcampus.models.dtos.responses;

import com.ti.smartcampus.models.constants.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

/**
 * @author Azam
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StudentResponse {

    private String admissionNumber;
    private String firstName;
    private String middleName;
    private String lastName;
    private String contact;
    private LocalDate dateOfBirth;
    private String academicClass;
    private String courseName;
    private Gender gender;
    private String religion;


}
