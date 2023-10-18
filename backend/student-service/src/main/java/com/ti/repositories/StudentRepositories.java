package com.ti.repositories;

import com.ti.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Azam
 */
public interface StudentRepositories extends JpaRepository<Student, String> {
}
