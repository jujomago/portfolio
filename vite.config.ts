import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    banner: `/**
 * @license
 * Copyright (c) 2026 Juan Josue Mancilla G. All rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */`,
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // Removed banner from here to avoid duplication if both worked, 
        // but esbuild.banner is more reliable for minified output.
      }
    }
  }
})
