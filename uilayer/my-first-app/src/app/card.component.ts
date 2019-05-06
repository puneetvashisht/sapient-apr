import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'my-card',
    template: `
    <tr>
        <td>Id</td>
        <td>{{rating}}</td>
        <td>{{description}}</td>
        <td> {{userName}}</td>
    </tr>

    <my-card *ngFor="let feedback of feedbacks | search:searchTxt.value" [rating]="feedback.rating" [description]="feedback.description" [userName]="feedback.userName"></my-card> 
    `
})
export class CardComponent implements OnInit {

    @Input('rating')rating: number = 0
    @Input('description')description: string;
    @Input('userName')userName: string;

    constructor(private http: HttpClient) { }

    ngOnInit() { 

    }

    deleteEmployee(){
        console.log('click event...')
        this.http.delete('http://localhost:8080/api/employee/')
        .subscribe(res=>{
            console.log(res);
        })
    }

}