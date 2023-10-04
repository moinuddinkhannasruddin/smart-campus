package com.ti.models.dtos.common;

import com.ti.models.EntitySetting;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */

@Getter
@Setter
@NoArgsConstructor
public class EntityDto {

    private Integer id;
    private String name;
    private String slogan;
    private Integer isActive;
    private EntitySettingDto entitySetting;
}
