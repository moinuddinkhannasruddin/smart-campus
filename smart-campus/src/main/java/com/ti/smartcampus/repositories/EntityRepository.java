package com.ti.smartcampus.repositories;

import com.ti.smartcampus.models.EEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Azam
 */

public interface EntityRepository extends JpaRepository<EEntity, Integer> {
}
