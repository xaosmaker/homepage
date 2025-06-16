import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["local.com"],
    host: "0.0.0.0"
  },

  plugins: [react()],
})
