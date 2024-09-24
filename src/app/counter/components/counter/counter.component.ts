import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `

  <p>Bienvenidos a Angular</p>
<p> {{ counter}}</p>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetBy(10)">Reset</button>
<button (click)="increaseBy(-1)">-1</button>


`
,
  standalone: true,
})


export class CounterComponent{

    public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  resetBy(value:number):void{
  this.counter = value;
  }
}
