import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-message',
  // OnPush: solo se refresca si cambia una entrada o una signal que lee su plantilla.
  // En Angular 22 es lo predeterminado; lo ponemos explícito para versiones anteriores.
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    {{ refrescado() }}
    <p>{{ message() }}</p>
    <button (click)="update.emit()">Actualizar mensaje</button>
  `,
})
export class Message {
  message = input('');
  update = output();

  refrescado() {
    console.log('Message se ha refrescado');
    return '';
  }
}
