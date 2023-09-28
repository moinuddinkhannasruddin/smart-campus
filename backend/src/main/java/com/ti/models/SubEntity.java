package com.ti.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */
@Entity
@Table(name = "sub_entity")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SubEntity extends Base{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    private String name;

    private String code;

    private String address;

    private String logo;

    @Column(name = "is_active", columnDefinition = "TINYINT default 0")
    private int isActive;

//    @ManyToOne
//    @JoinColumn(name = "entity_id")
//    private EEntity entity;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinTable(name = "entity_sub_entity",
            joinColumns =
                    { @JoinColumn(name = "entity_id", referencedColumnName = "id") },
            inverseJoinColumns =
                    { @JoinColumn(name = "sub_entity_id", referencedColumnName = "id") })
    private EEntity entity;
}
