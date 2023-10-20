package com.ti.smartcampus.repositories;

import com.ti.smartcampus.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Integer> {
}