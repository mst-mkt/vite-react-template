import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './lib/tanstack-router/routeTree.gen'

const router = createRouter({
  routeTree: routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => {
  return <RouterProvider router={router} />
}

export default App
