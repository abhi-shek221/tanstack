import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/customers')({
  component: Customers,
})

function Customers() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brutalist-dark">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-display font-black text-brutalist-light">
          CUSTOMERS
        </h1>
        <p className="text-brutalist-light/70 text-xl">
          Customer stories page - Coming soon
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 border-2 border-brutalist-secondary 
                   text-brutalist-secondary hover:bg-brutalist-secondary hover:text-brutalist-dark
                   transition-all duration-200 font-bold uppercase tracking-wide"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  )
}
