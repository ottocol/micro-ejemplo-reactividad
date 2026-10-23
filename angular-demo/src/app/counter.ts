import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  // OnPush: solo se refresca si cambia una entrada o una signal que lee su plantilla.
  // En Angular 22 es lo predeterminado; lo ponemos explícito para versiones anteriores.
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    {{ refrescado() }}
    <h1>{{ count() }}</h1>
    <button (click)="increment.emit()">Incrementar</button>
  `,
})
export class Counter {
  count = input(0);
  increment = output();

  // Angular llama a esta función cada vez que vuelve a evaluar la plantilla
  refrescado() {
    console.log('Counter se ha refrescado');
    return '';
  }
}
