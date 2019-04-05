package com.sapient.entity;

import java.util.ArrayList;
import java.util.List;

public class Test {

	public static void main(String[] args) {
		EmployeeDAO dao = new EmployeeDAO();
		
		Address homeAddress = new Address(234, "GK", "Delhi");
		Address officeAddress = new Address(234, "Marthalli", "Bangalore");
		
		Employee emp = new Employee("Priya", 34343.33);
		
		// Set Employee into Adresses
		homeAddress.setEmployee(emp);
		officeAddress.setEmployee(emp);
		
		List<Address> addresses = new ArrayList<>();
		addresses.add(homeAddress);
		addresses.add(officeAddress);
		
		// Set Addresses into Employee
		emp.setAddresses(addresses);
		
//		dao.addEmployee(homeAddress);
		
		dao.addAddress(homeAddress);
//		dao.addAddress(officeAddress);
		
	
//		
//		Employee e = dao.findEmployee(9);
//		System.out.println(e);
		
//		List<Employee> emps = dao.findAllEmployee();
//		System.out.println(emps);
		
//		System.out.println( dao.findAllEmployeByName("Priya"));

	}

}
