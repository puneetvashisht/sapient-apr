package com.sapient.services;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.ObjectMessage;
import javax.jms.Session;
import javax.jms.TextMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
	
	@Autowired
	JmsTemplate jmsTemplate;
	
	public void execute(){
		
		jmsTemplate.send(new MessageCreator(){
			
			public Message createMessage(Session session) throws JMSException{
				TextMessage objectMessage = session.createTextMessage("Some text!!");
				return objectMessage;
			}
		});
		
	}

}
