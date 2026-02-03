import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Geometric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 border-4 border-brutalist-accent/20 rotate-12 animate-scale-in" 
             style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }} />
        <div className="absolute bottom-40 left-10 w-48 h-48 border-4 border-brutalist-secondary/20 -rotate-6 animate-scale-in"
             style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-brutalist-accent/10 rotate-45 animate-fade-in"
             style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* Eyebrow text */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-brutalist-secondary bg-brutalist-secondary/10 
                          text-brutalist-secondary font-semibold text-sm tracking-wider uppercase animate-slide-up">
            <Zap className="w-4 h-4" />
            <span>Next-Gen Agent Training</span>
          </div>

          {/* Main headline */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-black leading-none tracking-tighter 
                         animate-slide-up max-w-5xl mx-auto"
              style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            <span className="block">OPTIMIZE</span>
            <span className="block text-brutalist-gradient">EVERY</span>
            <span className="block">INTERACTION</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-brutalist-light/80 max-w-3xl mx-auto font-medium leading-relaxed 
                        animate-slide-up"
             style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            Revolutionize customer experience with AI-powered training that transforms human and AI agents 
            into unstoppable forces of excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-slide-up"
               style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
            <button className="group relative px-8 py-5 bg-brutalist-accent border-4 border-brutalist-light 
                             text-brutalist-light font-bold text-lg uppercase tracking-wide
                             brutalist-shadow hover:translate-x-1 hover:translate-y-1 
                             transition-transform duration-200 hover:shadow-none">
              <span className="flex items-center gap-2">
                Launch Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-8 py-5 border-4 border-brutalist-light bg-transparent
                             text-brutalist-light font-bold text-lg uppercase tracking-wide
                             hover:bg-brutalist-light hover:text-brutalist-dark
                             transition-all duration-200">
              <span className="flex items-center gap-2">
                Explore Platform
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto animate-fade-in"
               style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <div className="p-6 border-2 border-brutalist-accent bg-brutalist-gray">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-6 h-6 text-brutalist-accent" />
                <div className="text-4xl font-display font-black text-brutalist-accent">85%</div>
              </div>
              <p className="text-sm text-brutalist-light/70 uppercase tracking-wider font-semibold">
                Quality Improvement
              </p>
            </div>

            <div className="p-6 border-2 border-brutalist-secondary bg-brutalist-gray">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-brutalist-secondary" />
                <div className="text-4xl font-display font-black text-brutalist-secondary">3x</div>
              </div>
              <p className="text-sm text-brutalist-light/70 uppercase tracking-wider font-semibold">
                Faster Training
              </p>
            </div>

            <div className="p-6 border-2 border-brutalist-light bg-brutalist-gray">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-brutalist-light" />
                <div className="text-4xl font-display font-black text-brutalist-light">100%</div>
              </div>
              <p className="text-sm text-brutalist-light/70 uppercase tracking-wider font-semibold">
                Interaction Coverage
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brutalist-dark to-transparent" />
    </section>
  )
}
