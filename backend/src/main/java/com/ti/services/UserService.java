package com.ti.services;

import com.ti.models.User;
import com.ti.models.dtos.requests.UserRequest;
import com.ti.repositories.UserRepository;
import com.ti.utils.ClassUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Azam
 */

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User saveUser(UserRequest userRequest) {
        User user = ClassUtil.convert(userRequest, User.class);

        return userRepository.save(user);
    }
}
