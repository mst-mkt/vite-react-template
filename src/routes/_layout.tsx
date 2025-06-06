import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export const Route = createFileRoute('/_layout')({
  component: () => <RootLayout />,
})

const RootLayout = () => (
  <div className="flex min-h-svh flex-col gap-y-12">
    <Header />
    <main className="mx-auto flex w-full max-w-[800px] grow flex-col gap-y-8 px-6">
      <Outlet />
    </main>
    <Footer />
  </div>
)
