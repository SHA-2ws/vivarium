import path from "path"

import { UserConfig, defineConfig } from "vite"
import vercel from "vite-plugin-vercel"
import svgr from "vite-plugin-svgr"
import react from "@vitejs/plugin-react-swc"
import { compression } from "vite-plugin-compression2"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), vercel(), compression({ algorithm: "brotliCompress" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
} as UserConfig)
