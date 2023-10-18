package com.ti.models.dtos.requests;

import com.ti.models.constants.Gender;
import com.ti.models.constants.StudentStatus;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * @author Azam
 */

@Getter
@Setter
@NoArgsConstructor
public class StudentRequest {

    @NotEmpty(message = "First name is required. Please provide your first name.")
    private String firstName;

    @NotEmpty(message = "Middle name is required. Please provide your middle name.")
    private String middleName;

    @NotEmpty(message = "Last name is required. Please provide your last name.")
    private String lastName;

    @NotNull(message = "Gender is required. Please provide your gender.")
    private Gender gender;

    @Past(message = "Date of birth must be in the past.")
    private LocalDate dateOfBirth;

    @NotEmpty(message = "Contact is required. Please Provide your contact.")
    @Pattern(regexp = "\\d{10}", message = "Contact must be a 10-digit number")
    private String contact;

    @Pattern(regexp = "\\d{10}", message = "Alternate contact must be a 10-digit number.")
    private String alternateContact;

    @Email(message = "Invalid email address. Please provide a valid email.")
    private String email;

    private Integer age;
    private LocalDateTime admissionDate;
    private String admissionNumber;
}
