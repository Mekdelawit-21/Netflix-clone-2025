import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Netflix-clone-2025",
  build: {
    outDir: 'dist',       
    sourcemap: true,  
  },
});
