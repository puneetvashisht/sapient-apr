import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-card',
    template: `
    <div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/100" class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">{{title | uppercase}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary" (click)="handleClick()">Go somewhere</a>
    </div>
    </div>
    
    
    `
})
export class CardComponent implements OnInit {

    @Input('title')title: string = 'Default title!!'

    constructor() { }

    ngOnInit() { 

    }

    handleClick(){
        console.log('click event...')
    }

}