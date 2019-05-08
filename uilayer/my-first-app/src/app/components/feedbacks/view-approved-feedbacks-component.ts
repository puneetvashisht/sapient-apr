import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
    selector: 'app-view-approved-feedbacks',
    template: `
    <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Rating</th>
        <th scope="col">Description</th>
        <th scope="col">Rated By</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let feedback of feedbacks">
        <td>{{feedback.rating}}</td>
        <td>{{feedback.description}}</td>
        <td> {{feedback.userName}}</td>
      </tr>
    </tbody>
    </table>
    
    `
})
export class ViewApprovedFeedbacksComponent implements OnInit {


    feedbacks: Array<Feedback> = []
    constructor(private feedbackService: FeedbackService) { }

    ngOnInit() {
      this.feedbackService.fetchApprovedFeedbacks()
        .subscribe((res: Array<Feedback>) => {
          console.log(res)
          this.feedbacks = res;
        })
    }
}