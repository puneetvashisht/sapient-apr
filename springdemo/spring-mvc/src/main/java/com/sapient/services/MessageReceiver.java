package com.sapient.services;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.TextMessage;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
public class MessageReceiver {

	
	private static final String ORDER_QUEUE = "queue.order1";

	@JmsListener(destination = ORDER_QUEUE)
	public void receiveMessage(final Message message) throws JMSException {
		System.out.println("******************");
		
		TextMessage textMessage = (TextMessage)message;
		System.out.println(textMessage);

		

	}
	
}