import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from './models/feedback';

@Component({
  selector: 'view-employee',
  template: `
  
        <input #searchTxt (keyup)="0" type="text" class="form-control" placeholder="Search In Feedbacks" aria-label="Username" aria-describedby="basic-addon1"/>
            
          <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Rating</th>
              <th scope="col">Description</th>
              <th scope="col">Rated By</th>
              <th scope="col">Approve for Display</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let feedback of feedbacks | search:searchTxt.value">
              <td>{{feedback.rating}}</td>
              <td>{{feedback.description}}</td>
              <td> {{feedback.userName}}</td>
              <td> <button type="button" class="btn btn-success" (click)="approve(feedback.id, true)">{{feedback.approved? 'Approved': 'Disapproved'}}</button></td>
            </tr>
          </tbody>
          </table>


    `
})
export class ViewFeedbacksComponent implements OnInit {

  feedbacks: Array<Feedback> = []
  message : string 
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/feedback')
      .subscribe((res: Array<Feedback>) => {
        console.log(res)
        this.feedbacks = res;
      })
  }

  approve(feedbackId: number, aproove: boolean){
    this.http.get('http://localhost:8080/api/feedback/approve/' + feedbackId)
    .subscribe((res: string) => {
      console.log(res)
      // this.message = res
    })
  }

}