package com.ti.models.dtos.responses;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */
@Getter
@Setter
@NoArgsConstructor
public class EntitySettingResponseDto {

    private Integer id;

    private String primaryColor;

    private String secondaryColor;

    private String territoryColor;

    private String logo;

}
