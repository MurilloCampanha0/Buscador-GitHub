import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração padrão do Vite com suporte a React.
// Docs: https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
