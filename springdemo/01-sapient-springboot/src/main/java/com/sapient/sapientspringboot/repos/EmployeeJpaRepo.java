package com.sapient.sapientspringboot.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sapient.sapientspringboot.entities.Employee;

public interface EmployeeJpaRepo extends JpaRepository<Employee, Integer>{
	
	public Employee findEmployeeByName(String name);

}
