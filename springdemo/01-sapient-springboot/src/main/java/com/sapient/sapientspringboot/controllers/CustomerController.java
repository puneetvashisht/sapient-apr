package com.sapient.sapientspringboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sapient.sapientspringboot.entities.Customer;
import com.sapient.sapientspringboot.entities.Employee;
import com.sapient.sapientspringboot.repos.CustomerRepo;



@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(path="/api/")
public class CustomerController {
	@Autowired
	CustomerRepo customerRepo;
	
	@RequestMapping(path="/customers", method=RequestMethod.GET)
	public List<Customer> findCustomers(){
		
		ResponseEntity<Employee> re = null;
		List<Customer> customers = customerRepo.findAll();
		return customers;

	}

	@RequestMapping(path="/customer", method=RequestMethod.POST)
	public ResponseEntity<Void> addCustomer(@RequestBody Customer customer){
		ResponseEntity<Void> re = null;
			
				customerRepo.save(customer);
				re = new ResponseEntity<>(HttpStatus.CREATED);
			
		return re;
		
	}

}
