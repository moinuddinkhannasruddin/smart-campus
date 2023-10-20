package com.ti.smartcampus.repositories;

import com.ti.smartcampus.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author Azam
 */
public interface StudentRepositories extends JpaRepository<Student, String>, JpaSpecificationExecutor<Student> {
}
