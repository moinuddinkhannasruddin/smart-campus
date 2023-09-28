package com.ti.utils;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Azam
 */
public class ClassUtil {

    public static <T> T convert(Object data, Class<T> ClassToConvert) {
        ModelMapper mm = new ModelMapper();
        mm.getConfiguration().setDeepCopyEnabled(false);
        mm.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return mm.map(data, ClassToConvert);
    }

    public static <S, T> List<T> convertList(List<S> dl, Class<T> ClassToConvert) {
        return dl.stream().map(r -> ClassUtil.convert(r, ClassToConvert)).collect(Collectors.toList());
    }
}
