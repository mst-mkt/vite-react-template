import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: 'src/routes',
      generatedRouteTree: 'src/lib/tanstack-router/routeTree.gen.ts',
      routeFileIgnorePrefix: '.',
      semicolons: false,
      quoteStyle: 'single',
    }),
  ],
})
