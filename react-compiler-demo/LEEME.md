# Micro-ejemplo de React con y sin React Compiler

```bash
npm install
npm run dev       # con React Compiler
npm run dev:sin   # sin React Compiler, para comparar
```

Abre la consola del navegador y pulsa los botones. Resultado comprobado (React 19, React Compiler 1.0):

| | Incrementar | Actualizar mensaje |
|---|---|---|
| Sin compilador | App, Counter, Message | App, Counter, Message |
| Con compilador | App, Counter | App, Message |

En modo desarrollo, React con `StrictMode` renderiza dos veces cada componente para detectar errores. Este proyecto no usa `StrictMode`, así que cada render sale una sola vez en la consola.

- `App.compilado-con-react-compiler.js`: el código que genera el compilador, para enseñarlo.
- `enlace-react-compiler-playground.txt`: el mismo ejemplo en el playground oficial del compilador (muestra el código compilado, no lo ejecuta).
