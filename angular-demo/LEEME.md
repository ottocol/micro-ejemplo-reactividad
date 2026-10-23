# Micro-ejemplo en Angular

```bash
npm install
npm run dev     # ng serve
```

Resultado comprobado (Angular 22.2, sin Zone.js, compilado con el CLI): al incrementar se refrescan App y Counter; al actualizar el mensaje, App y Message.

Para saber cuándo se refresca cada componente, cada plantilla llama a un método `refrescado()` que escribe en la consola: Angular lo ejecuta cada vez que vuelve a evaluar esa plantilla.

**Si StackBlitz no arranca el proyecto**: el CLI de Angular 22 exige Node 22.22.3 o superior, y no he podido comprobar qué versión usa StackBlitz. En ese caso, en `package.json` cambia `^22.2.0` por `^21.0.0` en todas las dependencias de Angular, y `"typescript": "~6.0.0"` por `"typescript": "~5.9.0"`. Con Angular 21 el resultado es el mismo (comprobado), gracias al `OnPush` explícito de los componentes.
