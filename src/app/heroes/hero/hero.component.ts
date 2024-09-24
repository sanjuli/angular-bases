import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescriptions():string{
    return`${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'SpiderMan';
  }

  changeAge():void{
    this.age = 32;
  }

  resetButton():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
