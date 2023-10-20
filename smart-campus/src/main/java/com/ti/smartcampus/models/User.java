package com.ti.smartcampus.models;


import com.ti.smartcampus.models.constants.Gender;
import com.ti.smartcampus.utils.SecurityUtil;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

/**
 * @author Azam
 */

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User extends Base {

    @Id
    @Column(name = "user_id", length = 256)
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "contact")
    private String contact;

    @Email
    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "is_active", columnDefinition = "TINYINT(1) DEFAULT 0")
    private Integer isActive;

    @Column(name = "is_2fa_active", columnDefinition = "TINYINT(1) DEFAULT 0")
    private Integer is2FaActive;

    @Column(name = "last_login")
    private LocalDateTime lastLogin;

    @Column(name = "login_try")
    private LocalDateTime loginTry;

    @Column(name = "login_attempt", columnDefinition = "int(11) DEFAULT 0")
    private Integer loginAttempt = 0;

    @Column(name = "user_types")
    private String userTypes;

    @Column(name = "dob")
    private LocalDate dateOfBirth;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles",
            joinColumns =
                    {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns =
                    {@JoinColumn(name = "role_id", referencedColumnName = "id")})
    private Set<Role> roles;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "sub_entity_users",
            joinColumns =
                    {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns =
                    {@JoinColumn(name = "sub_entity_id", referencedColumnName = "id")})
    private List<SubEntity> subEntities;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinTable(name = "entity_users",
            joinColumns =
                    {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns =
                    {@JoinColumn(name = "entity_id", referencedColumnName = "id")})
    private EEntity entity;

    public void setHashPassword(String password) {
        password = SecurityUtil.hash2(password);
        this.setPassword(password);
    }

    public boolean isValidPassword(String password) {
        if (password == null) {
            return false;
        }

        password = SecurityUtil.hash2(password);
        return password.equals(this.getPassword());
    }


}
