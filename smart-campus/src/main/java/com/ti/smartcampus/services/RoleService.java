package com.ti.smartcampus.services;

import com.ti.smartcampus.exceptions.ServiceException;
import com.ti.smartcampus.exceptions.errors.UserErrors;
import com.ti.smartcampus.models.Role;
import com.ti.smartcampus.models.User;
import com.ti.smartcampus.repositories.RoleRepository;
import com.ti.smartcampus.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;

/**
 * @author Azam
 */

@Service
@RequiredArgsConstructor
public class RoleService {

    private final LoggerService loggerService;
    private final UserRepository userRepository;

    public Set<Role> getRolesByUserId(String userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ServiceException(UserErrors.UE207));
        loggerService.info("Get Roles by UserId", "getRolesByUserId", "");
        return user.getRoles();
    }
}
