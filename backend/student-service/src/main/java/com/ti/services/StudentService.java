package com.ti.services;

import com.ti.models.Student;
import com.ti.models.dtos.requests.StudentRequest;
import com.ti.repositories.StudentRepositories;
import com.ti.utils.ClassUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author Azam
 */
@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepositories studentRepositories;

    public String save(StudentRequest studentRequest){

        Student student = ClassUtil.convert(studentRequest, Student.class);
        //create student id combination of College alias + courseId + currentYear + courseIntake-1
        String studentId = String.valueOf(student.getCreatedAt().getYear() + "" + student.getCreatedAt().getMonth());

        student.setId(studentId);

        studentRepositories.save(student);

        return studentId;
    }
}
