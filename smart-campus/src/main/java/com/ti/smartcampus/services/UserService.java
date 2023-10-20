package com.ti.smartcampus.services;

import com.ti.smartcampus.models.User;
import com.ti.smartcampus.models.dtos.requests.UserRequest;
import com.ti.smartcampus.repositories.UserRepository;
import com.ti.smartcampus.utils.ClassUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
