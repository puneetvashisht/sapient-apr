import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    
    constructor(private http: HttpClient) { 

        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    signUp(user: User): Observable<any>{
        console.log(user);
        return this.http.post('api/auth/signup', user)
    }
    login(user:User): Observable<any>{
        console.log(user);
        return this.http.post('api/auth/signin', user)
        .pipe(map((user:User) => {
            // login successful if there's a jwt token in the response
            console.log('In map fn: ', user)
            if (user && user.accessToken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    checkUsernameAvailability(username: string): Observable<any>{
        return this.http.get('api/user/checkUsernameAvailability?username='+username)
    }

    checkEmailAvailability(email: string): Observable<any>{
        return this.http.get('api/user/checkEmailAvailability?email='+email)
    }



}