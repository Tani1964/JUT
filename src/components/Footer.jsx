import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-green font-bold text-sm">
                JUT
              </div>
              <span className="font-semibold tracking-wide text-sm uppercase">
                JUT SFUNDS RECOVERY
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Helping homeowners recover their financial rights after foreclosure with expert legal coordination and thorough documentation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'Testimonials', to: '/testimonials' },
                { label: 'Resources', to: '/resources' },
                { label: 'Contact Us', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>1209 MOUNTAIN ROAD PL NE STE R</li>
              <li>ALBUQUERQUE NM 87110, USA</li>
              <li className="pt-1">+1 (512) 538-4801</li>
              <li>Mon–Fri 10am–5pm, Sat 1pm–5pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} JUT SFUNDS RECOVERY. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
