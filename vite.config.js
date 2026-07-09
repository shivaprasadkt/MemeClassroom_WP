// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// COOP + COEP headers are required by ffmpeg.wasm (SharedArrayBuffer).
// Without these, the browser refuses to expose SharedArrayBuffer and ffmpeg
// will throw "SharedArrayBuffer is not defined".
// Reference: https://ffmpegwasm.netlify.app/docs/getting-started/installation
const crossOriginHeaders = {
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Embedder-Policy": "require-corp",
};

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'blizzard-rental-express.ngrok-free.dev'
    ],
    headers: crossOriginHeaders,
  },
  preview: {
    headers: crossOriginHeaders,
  },
})