package com.ti.repositories;

import com.ti.models.SubEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubEntityRepository extends JpaRepository<SubEntity, Integer> {
}