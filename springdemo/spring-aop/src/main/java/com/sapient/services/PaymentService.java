package com.sapient.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapient.repos.PaymentRepository;

@Service
public class PaymentService {
	
	@Autowired
	PaymentRepository paymentRepo;
	
	public void fundsTransfer(int account1, int account2, double amount){
//		System.out.println(account1);
//		System.out.println(account2);
//		System.out.println(amount);
		paymentRepo.loadAccountBalance(account1);
		
		System.out.println("Allz Good!!");
		
	}

}
