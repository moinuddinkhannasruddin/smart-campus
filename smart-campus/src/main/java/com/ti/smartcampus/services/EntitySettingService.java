package com.ti.smartcampus.services;


import com.ti.smartcampus.repositories.EntitySettingRepository;
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
