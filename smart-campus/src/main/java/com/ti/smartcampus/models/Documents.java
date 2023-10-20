package com.ti.smartcampus.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "documents")
@Builder
@AllArgsConstructor
public class Documents extends Base{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "aadhaar")
    private String aadhaar;

    @Column(name = "aadhaar_document")
    private String aadhaarDocument;

    @Column(name = "pan")
    private String pan;

    @Column(name = "pan_document")
    private String panDocument;

    @Column(name = "student_id")
    private String studentId;

    @Column(name = "family_id")
    private String familyId;

    @Column(name = "bank_name")
    private String bankName;

    @Column(name = "bank_address")
    private String bankAddress;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "ifsc")
    private String ifsc;

}
