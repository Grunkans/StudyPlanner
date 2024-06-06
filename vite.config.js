import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  test: {
	environment: 'jsdom',
	globals: true,
	// setupFiles: './tests/setup.js',
	
  },
  server: {
    host: true,
    port: 6670
  },

})
