import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ResponseMessage } from 'src/app/models/response-message';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { ACCESS_TOKEN } from '../../../constants';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  loading = false;
    submitted = false;
    error = '';
  

  constructor(private formBuilder: FormBuilder, private userService: UserService, private notifier: NotifierService, private router: Router) {

    this.myForm = formBuilder.group({
      'usernameOrEmail': ['', [Validators.required]],
      'password': ['', [Validators.required]]    
    });
  }

  ngOnInit() {

     // reset login status
     this.userService.logout();
  }

  

  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
    if (this.myForm.invalid) {
        return;
    }
    console.log(this.myForm);
    this.userService.login(this.myForm.value)
    .pipe(first())
    .subscribe(
      (res:any)=>{
        console.log(res)
            this.notifier.notify( 'success', "You're successfully logged in!!");
            this.router.navigate(['/']);
       
    },
    error => {
        console.log(error);
            this.error = error;
            this.loading = false;
            this.notifier.notify( 'error',  'Your Username or Password is incorrect. Please try again!');
        })
    }

}
