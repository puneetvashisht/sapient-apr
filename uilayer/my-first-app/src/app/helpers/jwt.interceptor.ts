import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';


const helper = new JwtHelperService();

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;

       
        if (currentUser && currentUser.accessToken) {

            console.log('While pick up ', currentUser);
            // const isExpired = helper.isTokenExpired(currentUser.accessToken)
            // console.log(isExpired)
            
            const decodedToken = helper.decodeToken(currentUser.accessToken)
            console.log(decodedToken)
            
            if(decodedToken.iss){
                currentUser.role = decodedToken.iss
            }


            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.accessToken}`
                }
            });
        }

        return next.handle(request);
    }
}