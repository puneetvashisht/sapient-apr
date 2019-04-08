package com.sapient;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.sapient.services.PaymentService;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:beans.xml")
public class TestPaymentsService {
	
	@Autowired
	PaymentService paymentService;

	@Test
	public void testFundsTransfer() {
		
		paymentService.fundsTransfer(2343, 45454, 56565.34);
		
		
		
	}

}
