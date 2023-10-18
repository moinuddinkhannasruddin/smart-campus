package com.ti.repositories;

import com.ti.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CoursesRepository extends JpaRepository<Course, String>, JpaSpecificationExecutor<Course> {
}