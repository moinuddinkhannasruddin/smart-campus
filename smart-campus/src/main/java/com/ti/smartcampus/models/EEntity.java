package com.ti.smartcampus.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */

@Entity
@Table(name = "entity")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EEntity extends Base {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "slogan")
    private String slogan;

    @Column(name = "is_active", columnDefinition = "TINYINT(1) DEFAULT 0")
    private Integer isActive;

//    @OneToOne
//    @JoinColumn(name = "es_id", insertable = false, updatable = false)
//    private EntitySetting entitySetting;

}
