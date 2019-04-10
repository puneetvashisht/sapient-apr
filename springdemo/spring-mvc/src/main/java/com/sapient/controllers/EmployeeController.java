package com.sapient.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.sapient.entities.Employee;
import com.sapient.repos.EmployeeJpaRepo;

@Controller
public class EmployeeController {
	
	@Autowired
	EmployeeJpaRepo employeeJpaRepo;
	
	@RequestMapping(path="/employee/{id}", method=RequestMethod.GET)
	public ModelAndView findEmployee(@PathVariable("id") int id){
		
		System.out.println("FInd Employee in controller ..." + id);
		Employee emp = employeeJpaRepo.findEmployee(id);
		System.out.println(emp);
		
		ModelAndView mv = new ModelAndView();
		mv.addObject("emp", emp);
		mv.setViewName("employee");
		return mv;
	}

}
