import path from "path"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import { compression } from "vite-plugin-compression2"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), compression({ algorithm: "brotliCompress" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
