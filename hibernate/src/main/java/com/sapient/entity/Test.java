package com.sapient.entity;

public class Test {

	public static void main(String[] args) {
		EmployeeDAO dao = new EmployeeDAO();
		
		Employee emp = new Employee("Priya", 34343.33);
		
//		dao.addEmployee(emp);
		
		Employee e = dao.findEmployee(3);
		System.out.println(e);

	}

}
