import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Footer />
    </main>
  )
}
