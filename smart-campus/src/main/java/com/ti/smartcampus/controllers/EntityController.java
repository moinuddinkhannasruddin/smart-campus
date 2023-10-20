package com.ti.smartcampus.controllers;

import com.ti.smartcampus.models.constants.RoleType;
import com.ti.smartcampus.models.dtos.responses.EntityResponseDto;
import com.ti.smartcampus.security.TokenService;
import com.ti.smartcampus.services.EntityService;
import com.ti.smartcampus.services.EntitySettingService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Azam
 */
@RestController
@RequestMapping("/v1/entity/")
@RequiredArgsConstructor
public class EntityController {

    private final TokenService tokenService;
    private final EntityService entityService;
    private final EntitySettingService entitySettingService;

    @GetMapping("{entityId}")
    public EntityResponseDto login(HttpServletRequest request, @PathVariable Integer entityId){
        tokenService.verifyAccess(request, List.of(RoleType.ADMIN.name()));

        EntityResponseDto entity = entityService.getEntityById(entityId);
//        EntitySettingResponseDto entitySettingResponseDto = entitySettingService.getEntitySettingByEntityId(entityId);
//        entity.setEntitySetting(entitySettingResponseDto);

        return entity;
    }
}
