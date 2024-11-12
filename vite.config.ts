import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://satria-ws.github.io/shophy-ver1/"
})



//   "homepage": "https://satria-ws.github.io/shophy-ver1/",