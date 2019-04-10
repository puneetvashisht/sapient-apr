package com.sapient.repos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

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
	
	public List<Employee> findAllEmployees(){
		TypedQuery<Employee> query = em.createNamedQuery("findAllEmployees", Employee.class);
		return query.getResultList();
	}
	
	public Employee findEmployeeByName(String name){
		TypedQuery<Employee> query = em.createNamedQuery("findEmployeeByName", Employee.class);
		query.setParameter("empname", name);
		return query.getSingleResult();
	}

	@Transactional
	public void addEmployee(Employee emp) {
		em.persist(emp);
		
	}

}
