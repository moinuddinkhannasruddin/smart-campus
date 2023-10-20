package com.ti.smartcampus.repositories;

import com.ti.smartcampus.models.EntitySetting;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Azam
 */
public interface EntitySettingRepository extends JpaRepository<EntitySetting, Integer> {
//    Optional<EntitySetting> findByEntityId(Integer entityId);
}
