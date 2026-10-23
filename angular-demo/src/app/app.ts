import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Counter } from './counter';
import { Message } from './message';

@Component({
  selector: 'app-root',
  // OnPush: solo se refresca si cambia una entrada o una signal que lee su plantilla.
  // En Angular 22 es lo predeterminado; lo ponemos explícito para versiones anteriores.
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Counter, Message],
  template: `
    {{ refrescado() }}
    <app-counter [count]="count()" (increment)="count.set(count() + 1)" />
    <app-message [message]="message()" (update)="updateMessage()" />
  `,
})
export class App {
  count = signal(0);
  message = signal('Reactividad!!');

  updateMessage() {
    const nuevo = prompt('Nuevo mensaje');
    if (nuevo) this.message.set(nuevo);
  }

  refrescado() {
    console.log('App se ha refrescado');
    return '';
  }
}
