import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CV/',
  plugins: [react()],
  server: {
    allowedHosts: [
      '.ngrok-free.dev'
    ]
  }
})
