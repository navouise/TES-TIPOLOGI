import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Ganti 'tes-kepribadian' dengan nama repositori GitHub kamu
  base: "/TES-TIPOLOGI/", 
})
