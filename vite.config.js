import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // ← ваш порт
    // strictPort: true, // если true — упадёт, если порт занят; если false — возьмёт следующий
    // open: true,       // открыть браузер
    host: 'localhost', // доступ по локальной сети
    // proxy: { ... }    // ваш прокси остаётся как был
  },
});
