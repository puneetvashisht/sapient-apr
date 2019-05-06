import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { AddFeedbackComponent } from './add-feedback.component';
import { SearchPipe } from './pipes/search.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ViewFeedbacksComponent } from './view-feedbacks.component'

const routes: Routes = [
  { path: '', component: ViewFeedbacksComponent },
  { path: 'add', component:  AddFeedbackComponent}
];

@NgModule({
  declarations: [
    AppComponent, CardComponent,AddFeedbackComponent, ViewFeedbacksComponent, SearchPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
