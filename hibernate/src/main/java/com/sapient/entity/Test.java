package com.sapient.entity;

import java.util.ArrayList;
import java.util.List;

public class Test {

	public static void main(String[] args) {
		EmployeeDAO dao = new EmployeeDAO();
		
		Address homeAddress = new Address(234, "GK", "Delhi");
		Address officeAddress = new Address(234, "Marthalli", "Bangalore");
		
		List<Address> addresses = new ArrayList<>();
		addresses.add(homeAddress); addresses.add(officeAddress);
		
		Employee emp = new Employee("Priya", 34343.33);
		emp.setAddresses(addresses);
		
		
//		dao.addEmployee(emp);
//		
		Employee e = dao.findEmployee(9);
		System.out.println(e);
		
//		List<Employee> emps = dao.findAllEmployee();
//		System.out.println(emps);
		
//		System.out.println( dao.findAllEmployeByName("Priya"));

	}

}
