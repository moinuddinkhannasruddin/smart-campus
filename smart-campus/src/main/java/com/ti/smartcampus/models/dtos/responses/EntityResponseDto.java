package com.ti.smartcampus.models.dtos.responses;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */

@Getter
@Setter
@NoArgsConstructor
public class EntityResponseDto {

    private Integer id;
    private String name;
    private String slogan;
    private Integer isActive;
    private EntitySettingResponseDto entitySetting;
}
