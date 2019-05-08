import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from "@angular/forms";
import { Observable } from 'rxjs';
import { map, delay} from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';
import { NotifierService } from 'angular-notifier';
import { ResponseMessage } from 'src/app/models/response-message';
import { Router } from '@angular/router';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    myForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private notifier: NotifierService, private router: Router) {
        this.myForm = formBuilder.group({
                'name': ['', [ Validators.required, Validators.minLength(4)]],
                'username': ['', [ Validators.required, Validators.minLength(3)], [this.uniqueUsernameValidator.bind(this)]],
                'email': ['', [
                    Validators.required,
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ],
                [this.uniqueEmailValidator.bind(this)]],
                'password': ['',[ Validators.required, Validators.minLength(6), Validators.maxLength(20)]]    
        });

        // this.myForm.statusChanges.subscribe(
        //     (data: any) => console.log(data)
        // );
    }

    onSubmit() {
        console.log(this.myForm);
        this.userService.signUp(this.myForm.value)
        .subscribe((res:ResponseMessage)=>{
            console.log(res)
            if(res.success){
                this.notifier.notify( 'success', res.message);
                this.router.navigate(['/login']);
            }
            else{
                this.notifier.notify( 'error',  res.message);
            }
           
        },
        error => {
            console.log(error);
            if(error.status == 400){
                this.notifier.notify( 'error',  error.error.message);
            }
            })
        }
    
    uniqueUsernameValidator(control: FormControl) {
        console.log(control.value)
            return this.userService.checkUsernameAvailability(control.value).pipe(delay(500)).pipe(map(
                res => res.available? null: {"userAlreadyExists": true}
            ))
    }

    uniqueEmailValidator(control: FormControl) {
        console.log(control.value)
            return this.userService.checkEmailAvailability(control.value).pipe(delay(500)).pipe(map(
                res => res.available? null: {"emailAlreadyExists": true}
            ))
    }


    ngOnInit() { 

    }


}

    

