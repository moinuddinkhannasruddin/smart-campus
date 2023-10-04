package com.ti.models.dtos.common;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */
@Getter
@Setter
@NoArgsConstructor
public class EntitySettingDto {

    private Integer id;

    private String primaryColor;

    private String secondaryColor;

    private String territoryColor;

    private String logo;

}
