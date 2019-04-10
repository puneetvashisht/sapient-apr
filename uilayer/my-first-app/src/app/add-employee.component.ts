import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'add-employee',
    template: `
        <h2>Add Employee</h2>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Employee Name</span>
        </div>
        <input #name (change)="0" type="text" class="form-control" placeholder="Enter Employee Name" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Employee Salary</span>
        </div>
        <input #salary (change)="0" type="number" class="form-control" placeholder="Enter Employee Salary" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
        <button type="button" class="btn btn-secondary" (click)="addEmployee(name.value, salary.value)">Add Employee</button>
        </div>
    `
})
export class AddEmployeeComponent implements OnInit {

    constructor(private http: HttpClient) { }

    addEmployee(name:string, salary:number){
        console.log('Http POST here..', name, salary)
        var emp = {name, salary}
        this.http.post('http://localhost:8080/01sapient-springmvc/api/employee', emp)
        .subscribe((res)=>console.log(res));
    }

    ngOnInit() { 

    }

}