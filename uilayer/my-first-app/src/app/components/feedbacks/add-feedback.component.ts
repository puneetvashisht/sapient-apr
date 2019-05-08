import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback';


@Component({
    selector: 'add-feedback',
    template: `
        <h2>Submit Feedback</h2>

        <div *ngIf="message!=''" class="alert alert-success" role="alert">
            {{message}}
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Rating</span>
        </div>
        <input #rating (change)="0" type="number" class="form-control" placeholder="Enter Rating" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Description</span>
        </div>
        <input #description (change)="0" type="text" class="form-control" placeholder="Enter Description" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        

        <div class="input-group mb-3">
        <button type="button" class="btn btn-secondary" (click)="addFeedback(description.value, rating.value)">Submit Feedback</button>
        </div>
    `
})
export class AddFeedbackComponent implements OnInit {

    constructor(private feedbackService: FeedbackService) { }

    message: string = '';

    addFeedback(description:string, rating:number){
        // console.log('Http POST here..', name, salary)
        let feedback: Feedback = new Feedback(rating, description, 'Hard-Coded', null);
        
        this.feedbackService.addFeedback(feedback)
        .subscribe((res)=>{
            console.log(res)
            this.message = "Feedback added!!"
        
        });
    }

    ngOnInit() { 

    }

}