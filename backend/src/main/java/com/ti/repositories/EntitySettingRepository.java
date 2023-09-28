package com.ti.repositories;

import com.ti.models.EntitySetting;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Azam
 */
public interface EntitySettingRepository extends JpaRepository<EntitySetting, Integer> {
}
