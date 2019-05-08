import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    
    constructor(private http: HttpClient) { }


    signUp(user: User): Observable<any>{
        console.log(user);
        return this.http.post('http://localhost:8080/api/auth/signup', user)
    }
    login(user): Observable<any>{
        console.log(user);
        return this.http.post('http://localhost:8080/api/auth/signin', user)
    }

    checkUsernameAvailability(username: string): Observable<any>{
        return this.http.get('http://localhost:8080/api/user/checkUsernameAvailability?username='+username)
    }

    checkEmailAvailability(email: string): Observable<any>{
        return this.http.get('http://localhost:8080/api/user/checkEmailAvailability?email='+email)
    }



}