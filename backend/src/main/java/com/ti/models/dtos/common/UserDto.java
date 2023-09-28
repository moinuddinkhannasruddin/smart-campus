package com.ti.models.dtos.common;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ti.models.constants.UserType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Azam
 */

@Getter
@Setter
@NoArgsConstructor
public class UserDto {

    private String userId;
    private String email;
    private String name;
    private String contact;
    private String address;

    @JsonIgnore
    private String password;

    private UserType userType;
    private Integer isActive;
    private Integer is2FaActive;
    private LocalDateTime lastLogin;

    private List<EntityDto> linkedEntities = new ArrayList<>();

    private List<SubEntityDto> linkedSubEntityDto = new ArrayList<>();

    private List<RoleDto> linkedRoles = new ArrayList<>();


}
