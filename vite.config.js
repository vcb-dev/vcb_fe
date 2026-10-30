import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const be = "http://127.0.0.1:8786";
const proxy = { target: be, changeOrigin: false, secure: false };

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5174,
    strictPort: true,
    proxy: {
      "/api": proxy,
      "/media": proxy,
      "/web": proxy,
      "/wv": proxy,
      "/__login": proxy,
    },
  },
});
