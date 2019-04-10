package com.sapient.repos;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sapient.entities.Employee;

@Repository
public class EmployeeJpaRepo {
	
	@PersistenceContext
	EntityManager em;
	
	public Employee findEmployee(int id){
		return em.find(Employee.class, id);
	}

	@Transactional
	public void addEmployee(Employee emp) throws Exception {
		
		em.persist(emp);
		if(emp.getName().equals("Ravi")){
			throw new Exception("Already exists!!");
		}
		
	}

}
