import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { AddFeedbackComponent } from './components/feedbacks/add-feedback.component';
import { SearchPipe } from './pipes/search.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ViewFeedbacksComponent } from './components/feedbacks/view-feedbacks.component';
import { FeedbackApproveButtonComponent } from './components/feedbacks/feedback-approve-button.component'
import { ViewApprovedFeedbacksComponent } from './components/feedbacks/view-approved-feedbacks-component';
import { FeedbackService } from './services/feedback.service';
import { SignupComponent } from './components/user/signup/signup.component';
import { UserService } from './services/user/user.service';
const routes: Routes = [
  { path: '', component: ViewFeedbacksComponent },
  { path: 'viewApproved', component: ViewApprovedFeedbacksComponent },
  { path: 'add', component:  AddFeedbackComponent},
  { path: 'signup', component:  SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent, CardComponent,AddFeedbackComponent, ViewFeedbacksComponent, ViewApprovedFeedbacksComponent, SearchPipe, FeedbackApproveButtonComponent, SignupComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  providers: [FeedbackService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
