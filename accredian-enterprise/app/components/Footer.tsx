export default function Footer() {
  const year = new Date().getFullYear()

  const links = {
    Platform: ['Features', 'Programs', 'Analytics', 'Certifications', 'Integrations'],
    Company: ['About', 'Careers', 'Press', 'Blog', 'Contact'],
    Resources: ['Case Studies', 'Whitepaper', 'Webinars', 'Documentation', 'API Docs'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
  }

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-display text-xl font-semibold">
                Accredian <span className="text-blue-400">Enterprise</span>
              </span>
            </div>
            <p className="text-blue-200/60 text-sm leading-relaxed mb-6 max-w-xs">
              India's most trusted enterprise learning platform. Upskill your workforce with IIT & IIM certified programs.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {['LinkedIn', 'Twitter', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-xs font-medium text-blue-300"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{section}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-blue-200/60 text-sm hover:text-white transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/40 text-sm">
            © {year} Accredian Enterprise. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-blue-200/60 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
