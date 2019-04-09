package com.sapient.repos;

import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.sapient.entities.Employee;

@Repository
public class EmployeeRepo {
	
	@Autowired
	DataSource dataSource;
	
	JdbcTemplate jdbcTemplate;
	
	@PostConstruct
	public void init(){
		System.out.println("Initialization code .....");
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	public void execute(){
		System.out.println("In EmployeeRepo execute");
		String sql = "SELECT * FROM sapientdb.Employee";
		Map<String, Object> dataMap = jdbcTemplate.queryForMap(sql);
		System.out.println(dataMap);
		
	}
	
	public List<Employee> findAllEmployees(){
		RowMapper<Employee> rowMapper = new MyRowMapper();
//		jdbcTemplate.queryFor
		List<Employee> employees = jdbcTemplate.query("SELECT id, EMP_NAME, salary FROM sapientdb.Employee", rowMapper);
		return employees;
	}

}
