package com.ti.services;

import com.ti.exceptions.ServiceException;
import com.ti.exceptions.errors.UserErrors;
import com.ti.models.Role;
import com.ti.models.User;
import com.ti.repositories.RoleRepository;
import com.ti.repositories.UserRepository;
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
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    public Set<Role> getRolesByUserId(String userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ServiceException(UserErrors.UE207));
        loggerService.info("Get Roles by UserId", "getRolesByUserId", "");
        return user.getRoles();
    }
}
