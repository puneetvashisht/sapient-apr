import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

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
import { LoginComponent } from './components/user/login/login.component';
import { JwtInterceptor, ErrorInterceptor } from './helpers';

const routes: Routes = [
  { path: '', component: ViewFeedbacksComponent },
  { path: 'viewApproved', component: ViewApprovedFeedbacksComponent },
  { path: 'add', component:  AddFeedbackComponent},
  { path: 'signup', component:  SignupComponent},
  { path: 'login', component:  LoginComponent}
];


/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


@NgModule({
  declarations: [
    AppComponent, CardComponent,AddFeedbackComponent, ViewFeedbacksComponent, ViewApprovedFeedbacksComponent, SearchPipe, FeedbackApproveButtonComponent, SignupComponent, LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule,  NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [FeedbackService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
