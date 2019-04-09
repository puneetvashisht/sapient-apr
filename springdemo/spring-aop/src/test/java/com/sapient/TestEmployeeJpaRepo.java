package com.sapient;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.sapient.entities.Employee;
import com.sapient.repos.EmployeeJpaRepo;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:beans.xml")
public class TestEmployeeJpaRepo {
	
	@Autowired
	EmployeeJpaRepo employeeJpaRepo;

	
//	@Test
	public void testFindEmployee() {
		
		Employee emp = employeeJpaRepo.findEmployee(2);
		System.out.println(emp);
		assertEquals(emp.getName(), "Priya");		
	}
	
	@Test
	public void testAddEmployee() {
		
		Employee emp = new Employee("Ravi", 34353.32);
		try {
			employeeJpaRepo.addEmployee(emp);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		System.out.println(emp);
//		assertEquals(emp.getName(), "Priya");		
	}

}
