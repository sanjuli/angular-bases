import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterComponent } from './counter/components/counter/counter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, ListComponent,
    NgIf, NgFor, CounterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title:string = 'Hola Mundo';

}
