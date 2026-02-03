import { Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

export function Footer() {
  const menuLinks = [
    { title: 'Platform', href: '/platform' },
    { title: 'Customers', href: '/customers' },
    { title: 'Resources', href: '/resources' },
    { title: 'Careers', href: '/careers' },
  ]

  const companyLinks = [
    { title: 'Help Center', href: '/help' },
    { title: 'Terms', href: '/terms' },
    { title: 'Security', href: '/security' },
    { title: 'Privacy', href: '/privacy' },
  ]

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ]

  return (
    <footer className="relative bg-brutalist-gray border-t-4 border-brutalist-accent overflow-hidden noise-overlay">
      {/* Geometric background */}
      <div className="absolute top-0 right-0 w-96 h-96 border-4 border-brutalist-secondary/10 rotate-12 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brutalist-accent/5 -rotate-6 -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top section with CTA */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 pb-16 border-b-2 border-brutalist-light/20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-display font-black mb-4 leading-tight">
              ELEVATE YOUR
              <span className="block text-brutalist-gradient">CX OPERATIONS</span>
            </h2>
            <p className="text-lg text-brutalist-light/70 mb-8">
              Join innovative teams transforming customer interactions with AI-powered excellence.
            </p>
            <button className="group px-8 py-4 bg-brutalist-secondary border-4 border-brutalist-light 
                             text-brutalist-dark font-bold text-lg uppercase tracking-wide
                             brutalist-shadow-secondary hover:translate-x-1 hover:translate-y-1 
                             transition-transform duration-200 hover:shadow-none">
              <span className="flex items-center gap-2">
                Book a Demo
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-sm text-brutalist-light/70 uppercase tracking-wider font-semibold mb-2">
              Connect With Us
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 border-2 border-brutalist-light bg-brutalist-dark
                           hover:bg-brutalist-accent hover:border-brutalist-accent
                           transition-all duration-200 group"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-brutalist-light group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
          {/* Menu Section */}
          <div>
            <h3 className="text-brutalist-accent font-display font-bold text-xl mb-6 uppercase tracking-wide">
              Menu
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-brutalist-light/80 hover:text-brutalist-accent 
                             transition-colors duration-200 font-medium group flex items-center gap-2"
                  >
                    {link.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-brutalist-secondary font-display font-bold text-xl mb-6 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-brutalist-light/80 hover:text-brutalist-secondary 
                             transition-colors duration-200 font-medium group flex items-center gap-2"
                  >
                    {link.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Integration Partners */}
          <div className="col-span-2">
            <h3 className="text-brutalist-light font-display font-bold text-xl mb-6 uppercase tracking-wide">
              Integrations
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {['Zendesk', 'Intercom', 'Salesforce', 'HubSpot', 'Freshdesk', 'Gong'].map((partner) => (
                <div
                  key={partner}
                  className="px-4 py-2 border border-brutalist-light/20 
                           hover:border-brutalist-accent hover:bg-brutalist-accent/10
                           transition-all duration-200 text-center"
                >
                  <span className="text-sm font-semibold text-brutalist-light/70 hover:text-brutalist-light">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t-2 border-brutalist-light/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brutalist-accent border-2 border-brutalist-light flex items-center justify-center">
              <span className="text-brutalist-light font-display font-black text-xl">SR</span>
            </div>
            <div>
              <p className="text-brutalist-light font-bold">SOLIDROAD</p>
              <p className="text-xs text-brutalist-light/50">Agent Optimization Platform</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 border border-brutalist-light/20">
              <div className="w-2 h-2 bg-brutalist-secondary rounded-full animate-pulse" />
              <span className="text-xs text-brutalist-light/70 uppercase tracking-wider font-semibold">
                SOC 2 Certified
              </span>
            </div>
            <p className="text-sm text-brutalist-light/50">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
