package com.sapient.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {
	
	@Before("execution(* com.sapient.*.Payment*.*(..))")
	public void doLogging(JoinPoint joinPoint){
		System.out.println(joinPoint.getTarget());
		Object params[] = joinPoint.getArgs();
		for(Object param: params){
			System.out.println(param);
		}
		
		System.out.println("Before execution of target");
	}
	
	

}
