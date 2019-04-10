package com.sapient.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.sapient.entities.Employee;
import com.sapient.repos.EmployeeJpaRepo;

@RestController
@RequestMapping(path="/api/")
public class EmployeeRestController {
	@Autowired
	EmployeeJpaRepo employeeJpaRepo;
	
	@RequestMapping(path="/employee/{id}", method=RequestMethod.GET)
	public Employee findEmployee(@PathVariable("id") int id){
		
		System.out.println("FInd Employee in controller ..." + id);
		Employee emp = employeeJpaRepo.findEmployee(id);
		System.out.println(emp);
		return emp;

	}

}
