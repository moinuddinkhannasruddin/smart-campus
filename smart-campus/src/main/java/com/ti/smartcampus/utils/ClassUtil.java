package com.ti.smartcampus.utils;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.data.domain.Page;

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

    public static <T, R> Page<R> convertPage(Page<T> page, Class<R> responseType) {
        return page.map(item -> ClassUtil.convert(item, responseType));
    }
}
