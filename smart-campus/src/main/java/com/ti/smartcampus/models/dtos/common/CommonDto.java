package com.ti.smartcampus.models.dtos.common;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */
@Getter
@Setter
@NoArgsConstructor
public class CommonDto {
    private String message;
    private String data;

    public CommonDto(String m){
        message = m;
    }

    public CommonDto(String m, String d){
        message = m;
        data = d;
    }
}
