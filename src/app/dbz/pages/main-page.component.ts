import { Component, Input } from '@angular/core';
import { ListComponentDBZ } from '../components/list/list.component';
import { FormDbzComponent } from '../components/form-dbz/form-dbz.component';
import { Character } from '../interfaces/character.interface';
import { CommonModule } from '@angular/common';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  imports: [ListComponentDBZ, FormDbzComponent],
})
export class mainPageComponent {
  constructor(private dbzService: dbzService) {}

  get character(): Character[] {
    return [...this.dbzService.character];
  }

  onDeleteById(id: string): void {
    this.dbzService.onDeleteById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
