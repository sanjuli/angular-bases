import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['SpiderMan', 'IronMan', 'Thor', 'She Hulk', 'Hulk'];
  public deleteHero?:string;

    removeLastHero():void{
     this.deleteHero = this.heroNames.pop();
    }
}
