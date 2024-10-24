import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,     // This exposes the server on the local network
    open: true,     // Opens the app in the browser when you run npm run dev
  },
})
