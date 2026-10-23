import { createRoot } from 'react-dom/client'
import App from './App.jsx'

console.log(import.meta.env.VITE_SIN_COMPILADOR ? '--- SIN React Compiler ---' : '--- CON React Compiler ---')
createRoot(document.getElementById('root')).render(<App />)
