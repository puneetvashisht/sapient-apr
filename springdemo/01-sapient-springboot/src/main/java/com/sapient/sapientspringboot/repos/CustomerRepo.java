package com.sapient.sapientspringboot.repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.sapient.sapientspringboot.entities.Customer;

@Repository
public interface CustomerRepo extends MongoRepository<Customer, Integer> {

}
