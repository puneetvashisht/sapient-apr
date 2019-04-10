import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'my-first-app';

  employees: Array<Employee> = []
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get('http://localhost:8080/01sapient-springmvc/api/employees')
    .subscribe((res: Array<Employee>)=>{
      console.log(res)
      this.employees = res;
    })
  }

  // [
  //   {name: "Ravi", salary: 34344.34},
  //   {name: "Priya", salary: 34344.34},
  //   {name: "Amit", salary: 34344.34}
  // ]
}
