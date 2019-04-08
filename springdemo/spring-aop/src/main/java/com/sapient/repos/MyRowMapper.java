package com.sapient.repos;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.sapient.entities.Employee;

public class MyRowMapper implements RowMapper<Employee> {

	public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
		int id = rs.getInt(1);
		String name = rs.getString(2);
		double salary = rs.getDouble(3);
		
		Employee emp = new Employee(id, name, salary);
		return emp;
	}

}
