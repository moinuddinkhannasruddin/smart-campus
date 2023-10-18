package com.ti.services;

import com.ti.exceptions.DataNotFoundException;
import com.ti.exceptions.errors.EntityErrors;
import com.ti.models.EntitySetting;
import com.ti.models.dtos.responses.EntitySettingResponseDto;
import com.ti.repositories.EntitySettingRepository;
import com.ti.utils.ClassUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author Azam
 */
@Service
@RequiredArgsConstructor
public class EntitySettingService {

    private final EntitySettingRepository entitySettingRepository;
    private final LoggerService loggerService;

//    public EntitySettingResponseDto getEntitySettingByEntityId(Integer entityId) {
//        EntitySetting entitySetting = entitySettingRepository.findByEntityId(entityId).orElseThrow(() -> new DataNotFoundException(EntityErrors.EE301,EntityErrors.getErrorMessage(EntityErrors.EE301)));
//        loggerService.info("Get Entity Setting by Entity Id", "getEntitySettingByEntityId", "");
//        return ClassUtil.convert(entitySetting, EntitySettingResponseDto.class);
//    }
}
