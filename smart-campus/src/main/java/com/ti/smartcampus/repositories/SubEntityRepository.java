package com.ti.smartcampus.repositories;

import com.ti.smartcampus.models.SubEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubEntityRepository extends JpaRepository<SubEntity, Integer> {
}