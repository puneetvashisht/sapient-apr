import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMessage } from 'src/app/models/response-message';

@Component({
  selector: 'app-caption-button',
  template:`
    <button type="button" class="btn btn-secondary"  (click)= "handleButtonClick()">{{caption}}</button>
  ` 
})
export class FeedbackApproveButtonComponent implements OnInit {

  constructor(private http: HttpClient) { }

  caption: string = "Disapproved";
  @Input('approved') approved: boolean;
  @Input('key') key: any;
  ngOnInit() {
    if(this.approved){
      this.caption = 'Approved'
    }
  }

  handleButtonClick(){
    console.log('In CP handleButtonClick',  this.key)

    this.http.get('http://localhost:8080/api/feedbacks/approve/' + this.key)
    .subscribe((res: ResponseMessage) => {
      this.caption = res.message
    })
  }

}
