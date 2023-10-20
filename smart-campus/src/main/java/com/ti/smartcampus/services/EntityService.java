package com.ti.smartcampus.services;

import com.ti.smartcampus.exceptions.DataNotFoundException;
import com.ti.smartcampus.exceptions.errors.EntityErrors;
import com.ti.smartcampus.models.EEntity;
import com.ti.smartcampus.models.dtos.responses.EntityResponseDto;
import com.ti.smartcampus.repositories.EntityRepository;
import com.ti.smartcampus.utils.ClassUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author Azam
 */
@Service
@RequiredArgsConstructor
public class EntityService {

    private final EntityRepository entityRepository;
    private final LoggerService loggerService;

    public EntityResponseDto getEntityById(Integer entityId){
        EEntity entity = entityRepository.findById(entityId).orElseThrow(() -> new DataNotFoundException(EntityErrors.EE301, EntityErrors.getErrorMessage(EntityErrors.EE301)));
        loggerService.info("Get Entity by Entity Id", "getEntityById", "");

        return ClassUtil.convert(entity, EntityResponseDto.class);
    }
}
