package com.ti.smartcampus.repositories;


import com.ti.smartcampus.models.Family;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FamilyRepository extends JpaRepository<Family, Integer> {
}