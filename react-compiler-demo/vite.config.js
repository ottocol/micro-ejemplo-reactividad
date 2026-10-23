import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// npm run dev      -> con React Compiler
// npm run dev:sin  -> sin React Compiler (para comparar)
const sinCompilador = process.env.VITE_SIN_COMPILADOR === '1'

export default defineConfig({
  plugins: [
    react({
      babel: { plugins: sinCompilador ? [] : ['babel-plugin-react-compiler'] },
    }),
  ],
})
