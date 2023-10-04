package com.ti.models.dtos.common;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ti.models.dtos.responses.EntityResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * @author Azam
 */

@Getter
@Setter
@NoArgsConstructor
public class UserDto {

    private String id;
    private String email;
    private String name;
    private String contact;
    private String address;

    @JsonIgnore
    private String password;

    private String userTypes;
    private Integer isActive;
    private Integer is2FaActive;
    private LocalDateTime lastLogin;

    private List<EntityResponseDto> entities = new ArrayList<>();

    private List<SubEntityDto> subEntities = new ArrayList<>();

    private Set<RoleDto> roles;


}
