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


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    // {
    //     "name": "Puneet Vashisht",
    //     "username": "puneet",
    //     "email": "puneetvashisht@gmail.com",
    //     "password": "puneet"
    // }

    myForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private userService: UserService) {
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

        this.myForm.statusChanges.subscribe(
            (data: any) => console.log(data)
        );
    }

    // onAddHobby() {
    //     (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncExampleValidator));
    // }

    onSubmit() {
        console.log(this.myForm);
        this.userService.signUp(this.myForm.value)
        .subscribe((res)=>{
            console.log(res)
        })
    }

    // exampleValidator(control: FormControl): { [s: string]: boolean } {
    //     if (control.value === 'Example') {
    //         return { example: true };
    //     }
    //     return null;
    // }

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


       
        
        // const promise = new Promise<any>(
        //     (resolve, reject) => {
        //         setTimeout(() => {
        //             if (control.value === 'Example') {
        //                 resolve({ 'invalid': true });
        //             } else {
        //                 resolve(null);
        //             }
        //         }, 1500);
        //     }
        // );
        // return promise;
    

    ngOnInit() { 

    }


}

    

