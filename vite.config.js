import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    chunkSizeWarningLimit: 1000 // default is 500 KB, this increases limit to 1 MB
  }
})
