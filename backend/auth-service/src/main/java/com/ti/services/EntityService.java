package com.ti.services;

import com.ti.exceptions.DataNotFoundException;
import com.ti.exceptions.errors.EntityErrors;
import com.ti.models.EEntity;
import com.ti.models.dtos.responses.EntityResponseDto;
import com.ti.repositories.EntityRepository;
import com.ti.utils.ClassUtil;
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
        EEntity entity = entityRepository.findById(entityId).orElseThrow(() -> new DataNotFoundException(EntityErrors.EE301,EntityErrors.getErrorMessage(EntityErrors.EE301)));
        loggerService.info("Get Entity by Entity Id", "getEntityById", "");

        return ClassUtil.convert(entity, EntityResponseDto.class);
    }
}
