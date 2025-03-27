import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ['candidate-search-9bdq.onrender.com'],
  },
})
