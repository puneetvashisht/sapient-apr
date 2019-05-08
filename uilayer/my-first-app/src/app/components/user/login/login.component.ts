import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ResponseMessage } from 'src/app/models/response-message';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private notifier: NotifierService, private router: Router) {

    this.myForm = formBuilder.group({
      'usernameOrEmail': ['', [Validators.required]],
      'password': ['', [Validators.required]]    
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
    this.userService.login(this.myForm.value)
    .subscribe(
      (res:ResponseMessage)=>{
        console.log(res)
            this.notifier.notify( 'success', "You're successfully logged in!!");
            this.router.navigate(['/']);
       
    },
    error => {
        console.log(error);
            this.notifier.notify( 'error',  'Your Username or Password is incorrect. Please try again!');
        })
    }

}
