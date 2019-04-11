import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'my-card',
    template: `
    <div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/100" class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">{{title | uppercase}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button  class="btn btn-danger" (click)="deleteEmployee()">Delete - {{empid}}</button>
    </div>
    </div>
    
    
    `
})
export class CardComponent implements OnInit {

    @Input('title')title: string = 'Default title!!'
    @Input('empid')empid: number;

    constructor(private http: HttpClient) { }

    ngOnInit() { 

    }

    deleteEmployee(){
        console.log('click event...')
        this.http.delete('http://localhost:8080/api/employee/' + this.empid)
        .subscribe(res=>{
            console.log(res);
        })
    }

}