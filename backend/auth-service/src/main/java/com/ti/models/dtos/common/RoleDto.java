package com.ti.models.dtos.common;

import com.ti.models.constants.RoleType;
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
