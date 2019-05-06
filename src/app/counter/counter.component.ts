import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input('app-counter') count: Counter
  constructor() { }

  ngOnInit() {
  }

  countHigh(){
    this.count.myNumber++;
  }

  countLow(){
    if(this.count.myNumber > 0){
      this.count.myNumber--;
    }
    
  }

}
