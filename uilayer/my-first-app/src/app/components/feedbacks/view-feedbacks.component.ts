import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../../models/feedback';
import { ResponseMessage } from '../../models/response-message';
import { FeedbackService } from 'src/app/services/feedback.service';
import { first } from 'rxjs/operators';

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
              <th scope="col">Date Created</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let feedback of feedbacks | search:searchTxt.value">
              <td>{{feedback.rating}}</td>
              <td>{{feedback.description}}</td>
              <td> {{feedback.userName}}</td>
              <td><app-caption-button [approved]="feedback.approved" btclass="btn btn-warning" [key]="feedback.id"></app-caption-button></td>
              <td> {{feedback.dateCreated}}</td>
            </tr>
          </tbody>
          </table>


    `
})
export class ViewFeedbacksComponent implements OnInit {

  feedbacks: Array<Feedback> = []
  message : string 
  buttonCaption: string = 'T'
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    console.log('In feedbacks view component')
    this.feedbackService.fetchAllFeedbacks()
    .pipe(first())
      .subscribe((res: Array<Feedback>) => {
        console.log(res)
        this.feedbacks = res;
      },
      error => {
        console.log('Error case', error);
      })
  }

 

}