package com.sapient.sapientspringboot.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sapient.sapientspringboot.entities.Employee;

@RestController
public class TestController {
	
	@RequestMapping(path="/employees")
	public Employee findEmployee(){
		
		return new Employee(12, "Ravi", 343433);
		
	}

}
