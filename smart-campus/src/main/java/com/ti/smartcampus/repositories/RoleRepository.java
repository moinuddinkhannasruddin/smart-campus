package com.ti.smartcampus.repositories;


import com.ti.smartcampus.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {
}