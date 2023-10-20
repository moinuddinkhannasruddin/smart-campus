package com.ti.smartcampus.models.dtos.common;

import com.ti.smartcampus.models.constants.RoleType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */
@Getter
@Setter
@NoArgsConstructor
public class RoleDto {
    private Integer id;
    private String name;
    private RoleType type;
    private Integer isActive;
}
