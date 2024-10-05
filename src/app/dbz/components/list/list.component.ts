import { Component, Input, EventEmitter, Output } from '@angular/core'; // Importamos Component y Input para la creación del componente y su interacción con datos externos
import { Character } from '../../interfaces/character.interface'; // Importamos la interfaz Character, que define cómo debe ser un personaje (nombre y poder)
import { NgClass, NgFor } from '@angular/common'; // Importamos directivas para trabajar con bucles y clases condicionales

@Component({
  selector: 'dbz-list', // El selector que usaremos en el HTML para incluir este componente (por ejemplo, <dbz-list>)
  standalone: true, // Indica que este componente no necesita estar dentro de un módulo, es independiente
  imports: [NgFor, NgClass], // Módulos que permiten usar las directivas *ngFor (para listas) y [ngClass] (para clases dinámicas)
  templateUrl: './list.component.html', // Ruta del archivo de la plantilla HTML del componente
  styleUrl: './list.component.css', // Ruta del archivo CSS con los estilos de este componente
})
export class ListComponentDBZ {
  // @Input permite que este componente reciba datos desde un componente padre.
  // En este caso, 'characterList' es un arreglo de personajes (Character[]), que contiene
  // objetos con las propiedades 'name' y 'power'.
  // Inicialmente, este arreglo está vacío, pero se puede llenar desde el componente padre.
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el Id del personaje
    this.onDelete.emit(id);
  }
}
