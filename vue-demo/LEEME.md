# Micro-ejemplo en Vue

```bash
npm install
npm run dev
```

Resultado comprobado (Vue 3.5): al incrementar se re-renderizan Counter y App; al actualizar el mensaje, Message y App. `onUpdated` se dispara primero en el hijo y luego en el padre, porque marca el final del re-renderizado y el padre termina después que sus hijos.
