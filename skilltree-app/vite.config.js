<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
>>>>>>> 7c66dd37e3132c4c1edc0e10813604c195f492e9

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
