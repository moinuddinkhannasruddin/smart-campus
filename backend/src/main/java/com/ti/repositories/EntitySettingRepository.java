package com.ti.repositories;

import com.ti.models.EntitySetting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author Azam
 */
public interface EntitySettingRepository extends JpaRepository<EntitySetting, Integer> {
    Optional<EntitySetting> findByEntityId(Integer entityId);
}
