import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface'; // Importamos la interfaz Character
import { FormsModule } from '@angular/forms'; // Módulo para manejar formularios
import { CommonModule } from '@angular/common'; // Módulo común de Angular, usado para directivas básicas

@Component({
  selector: 'form-dbz', // El selector que se usará en el HTML para incluir este componente
  standalone: true, // Indica que este componente es independiente, no necesita ser parte de un módulo.
  imports: [FormsModule, CommonModule], // Importa módulos necesarios, como formularios y características comunes de Angular
  templateUrl: './form-dbz.component.html', // Ruta del archivo de la plantilla HTML asociada al componente
  styleUrl: './form-dbz.component.css', // Ruta del archivo CSS con los estilos del componente
})
export class FormDbzComponent {
  // Decorador @Output expone un EventEmitter al componente padre.
  // 'onNewCharacter' es el evento que emitirá el componente hijo al componente padre.
  // Se emite un objeto de tipo Character, que contiene un nombre y poder.
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // Propiedad pública character, que almacena los datos del nuevo personaje.
  // Inicialmente tiene valores por defecto: nombre vacío y poder igual a 0.
  public character: Character = {
    name: '',
    power: 0,
  };

  // Método que agrega un nuevo personaje. Se ejecuta cuando se desea agregar el personaje
  // ingresado en el formulario.
  addCharacter(): void {
    // Pausa la ejecución cuando se ejecuta este método (usado para depurar).
    console.log(this.character); // Imprime en consola los detalles del personaje actual.

    // Valida que el nombre del personaje no esté vacío.
    if (this.character.name.length === 0) return;

    // Si el nombre es válido, emite el evento 'onNewCharacter', pasando el objeto 'character'
    // al componente padre.
    this.onNewCharacter.emit(this.character);

    // Resetea el formulario, dejando el nombre vacío y el poder en 0.
    this.character = {
      name: '',
      power: 0,
    };
  }
}
