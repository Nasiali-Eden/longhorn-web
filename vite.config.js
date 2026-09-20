import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://<user>.github.io/longhorn-web/
export default defineConfig({ base: '/longhorn-web/', plugins: [react()] });
