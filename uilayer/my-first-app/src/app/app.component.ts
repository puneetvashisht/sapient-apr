import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'my-first-app';

  today = new Date();
  employees: Array<Employee> = []
  constructor(private http: HttpClient, private userService: UserService, private notifier: NotifierService, private router: Router) { }

  ngOnInit(){
    // this.http.get('http://localhost:8080/api/employees')
    // .subscribe((res: Array<Employee>)=>{
    //   console.log(res)
    //   this.employees = res;
    // })
  }

  logout(){
    this.userService.logout();
    this.notifier.notify( 'success', "You have successfully logged out!!")
    this.router.navigate(['/login']);
  }

  // [
  //   {name: "Ravi", salary: 34344.34},
  //   {name: "Priya", salary: 34344.34},
  //   {name: "Amit", salary: 34344.34}
  // ]
}
