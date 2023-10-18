package com.ti.repositories;

import com.ti.models.EEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Azam
 */

public interface EntityRepository extends JpaRepository<EEntity, Integer> {
}
