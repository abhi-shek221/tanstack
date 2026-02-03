import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/platform')({
  component: Platform,
})

function Platform() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brutalist-dark">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-display font-black text-brutalist-light">
          PLATFORM
        </h1>
        <p className="text-brutalist-light/70 text-xl">
          Platform page - Coming soon
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 border-2 border-brutalist-accent 
                   text-brutalist-accent hover:bg-brutalist-accent hover:text-brutalist-dark
                   transition-all duration-200 font-bold uppercase tracking-wide"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  )
}
