import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { AddEmployeeComponent } from './add-employee.component';
import { SearchPipe } from './pipes/search.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeComponent } from './view-employee.component';

const routes: Routes = [
  { path: '', component: ViewEmployeeComponent },
  { path: 'add', component:  AddEmployeeComponent}
];

@NgModule({
  declarations: [
    AppComponent, CardComponent,AddEmployeeComponent, ViewEmployeeComponent, SearchPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
