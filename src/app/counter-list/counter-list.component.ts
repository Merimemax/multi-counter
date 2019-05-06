import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  mycounter: Counter[]=
  [];

  constructor() { 
    // this.mycounter =[
    //   new Counter(),
    //   new Counter(),
    //   new Counter()
    // ]
  }

  ngOnInit() {
  }

  createCounter(){
    this.mycounter.push(new Counter())  
  }

}
