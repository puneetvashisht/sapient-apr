package com.sapient.sapientspringboot.controllers;

import java.util.List;

import javax.persistence.NoResultException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sapient.sapientspringboot.entities.Employee;
import com.sapient.sapientspringboot.repos.EmployeeJpaRepo;



@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(path="/api/")
public class EmployeeRestController {
	@Autowired
	EmployeeJpaRepo employeeJpaRepo;
	
	@RequestMapping(path="/employee/{id}", method=RequestMethod.GET)
	public ResponseEntity<Employee> findEmployee(@PathVariable("id") int id){
		
		ResponseEntity<Employee> re = null;
		
		System.out.println("FInd Employee in controller ..." + id);
		Employee emp = employeeJpaRepo.getOne(id);
		if(emp == null){
			re = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		else{
			re = new ResponseEntity<>(emp, HttpStatus.OK);
		}
		
		System.out.println(emp);
		
		return re;

	}
	
	@RequestMapping(path="/employee", method=RequestMethod.GET)
	public Employee findEmployee(@RequestParam("name") String name){
		
		System.out.println("FInd Employee in controller ..." + name);
		Employee emp = employeeJpaRepo.findEmployeeByName(name);
		System.out.println(emp);
		return emp;

	}
	
	@RequestMapping(path="/employee/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> deleteEmployee(@PathVariable("id") int id){
		employeeJpaRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@RequestMapping(path="/employees", method=RequestMethod.GET)
	public List<Employee> findAllEmployee(){
		return employeeJpaRepo.findAll();
	}
	
	@RequestMapping(path="/employee", method=RequestMethod.POST)
	public ResponseEntity<Void> addEmployee(@RequestBody Employee employee){
		ResponseEntity<Void> re = null;
	
			Employee emp = employeeJpaRepo.findEmployeeByName(employee.getName());
			System.out.println(emp);
			
			if(emp == null){
				employeeJpaRepo.save(employee);
				re = new ResponseEntity<>(HttpStatus.CREATED);
			}
			else{
				re = new ResponseEntity<>(HttpStatus.CONFLICT);
			}

		
		
		return re;
		
	}

}
