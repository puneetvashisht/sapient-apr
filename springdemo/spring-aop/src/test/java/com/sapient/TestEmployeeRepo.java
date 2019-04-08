package com.sapient;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.sapient.entities.Employee;
import com.sapient.repos.EmployeeRepo;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:beans.xml")
public class TestEmployeeRepo {
	
	@Autowired
	EmployeeRepo employeeRepo;

//	@Test
	public void testEmployeeRepo() {
		employeeRepo.execute();
//		paymentService.fundsTransfer(2343, 45454, 56565.34);
		
		
		
	}
	
	@Test
	public void testFindAllEmployees() {
		List<Employee> employees = employeeRepo.findAllEmployees();
		System.out.println(employees);
		assertEquals(employees.size(), 1);
//		paymentService.fundsTransfer(2343, 45454, 56565.34);
		
		
		
	}

}
