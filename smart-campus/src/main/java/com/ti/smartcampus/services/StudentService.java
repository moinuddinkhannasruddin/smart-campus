package com.ti.smartcampus.services;

import com.ti.smartcampus.exceptions.DataNotFoundException;
import com.ti.smartcampus.models.Student;
import com.ti.smartcampus.models.dtos.common.UserDto;
import com.ti.smartcampus.models.dtos.requests.StudentRequest;
import com.ti.smartcampus.models.dtos.responses.StudentResponse;
import com.ti.smartcampus.repositories.StudentRepositories;
import com.ti.smartcampus.repositories.specification.GenericSpecification;
import com.ti.smartcampus.repositories.specification.SearchCriteria;
import com.ti.smartcampus.utils.ClassUtil;
import com.ti.smartcampus.utils.CommonUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Random;

/**
 * @author Azam
 */
@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepositories studentRepositories;

    public String saveAdmissionRequest(UserDto userDto, StudentRequest studentRequest) {

        Student student = ClassUtil.convert(studentRequest, Student.class);
        //create student id combination of College alias + courseId + currentYear + courseIntake-1
        StringBuilder studentCode = new StringBuilder(student.getCreatedAt().getYear() + "" + student.getCreatedAt().getMonth());

        student.setId(CommonUtil.generateRandomString());
        student.setStudentCode(studentCode.toString());
        student.setEntityId(userDto.getEntity().getId());

        studentRepositories.save(student);

        return studentCode.toString();
    }

    public Page<StudentResponse> getAdmissionRequestList(Pageable pageable, UserDto userDto, String admissionNumber) {
        GenericSpecification<Student> ss = new GenericSpecification<>(new SearchCriteria("entityId", ":", userDto.getEntity().getId()));

        Specification<Student> spec = Specification.where(ss);

        if(admissionNumber != null){
            spec = spec.and(new GenericSpecification<>(new SearchCriteria("admissionNumber", ":", admissionNumber)));
        }

        Page<Student> students = studentRepositories.findAll(spec, pageable);

        return ClassUtil.convertPage(students, StudentResponse.class);
    }

    public StudentResponse getAddmissionRequestById(String admissionId) {
        Student student = studentRepositories.findById(admissionId).orElseThrow(() -> new DataNotFoundException("AddmissionReq not found"));
        return ClassUtil.convert(student, StudentResponse.class);
    }
}
