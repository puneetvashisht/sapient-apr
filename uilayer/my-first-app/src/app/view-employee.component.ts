import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'view-employee',
    template: `
       
    <div class="row">
        <input #searchTxt (keyup)="0" type="text" class="form-control" placeholder="Search with Employee Name" aria-label="Username" aria-describedby="basic-addon1"/>
        <my-card *ngFor="let employee of employees | search:searchTxt.value" [title]="employee.name" [empid]="employee.id"></my-card> 
        </div>
    `
})
export class ViewEmployeeComponent implements OnInit {

    employees: Array<Employee> = []
    constructor(private http: HttpClient) { }
  
    ngOnInit(){
      this.http.get('http://localhost:8080/api/employees')
      .subscribe((res: Array<Employee>)=>{
        console.log(res)
        this.employees = res;
      })
    }

}