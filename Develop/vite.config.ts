import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './environment', 'VITE_');

  return {
    envDir: './environment',
    plugins: [react()],
    server: {
      port: 5173,
    },
    preview: {
      host: true,
      port: 4173,
      allowedHosts: ['candidate-search-9bdq.onrender.com'],
    },
    define: {
      'process.env.VITE_GITHUB_TOKEN': JSON.stringify(env.VITE_GITHUB_TOKEN),
    },
  };
});