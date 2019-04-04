package com.sapient.entity;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;



public class EmployeeDAO {
	//SessionFactory  sesssionFactory = new Configuration().configure().buildSessionFactory();
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistanceUnit");
    
	public void addEmployee(Employee emp){
//		Session session = sesssionFactory.openSession();
//		Transaction tx = null;
//		tx = session.beginTransaction();
		
		EntityManager em = emf.createEntityManager();
		EntityTransaction transaction = em.getTransaction();
		transaction.begin();
		
		em.persist(emp);
		
		transaction.commit();
		em.close();
		
		
	}
	
	public Employee findEmployee(int id){
		
		EntityManager em = emf.createEntityManager();
	
		EntityTransaction transaction = em.getTransaction();
		transaction.begin();
		
		Employee emp =  em.find(Employee.class, id);
//		emp.setSalary(33333.44);
		
	
		transaction.commit();
		em.close();
		
		emp.setSalary(44444.44);
		
		EntityManager em1 = emf.createEntityManager();
		
		EntityTransaction transaction1 = em1.getTransaction();
		transaction1.begin();
		
		em1.merge(emp);
		
		transaction1.commit();
		em1.close();
		
		
		return emp;
	}

	
	

}
