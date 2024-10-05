import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterComponent } from './counter/components/counter/counter.component';
import { mainPageComponent } from './dbz/pages/main-page.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, ListComponent,
    CounterComponent, mainPageComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title:string = 'Hola Mundo';

}
