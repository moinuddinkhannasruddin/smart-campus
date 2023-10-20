package com.ti.smartcampus.repositories;

import com.ti.smartcampus.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CoursesRepository extends JpaRepository<Course, String>, JpaSpecificationExecutor<Course> {
}