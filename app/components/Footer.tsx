export default function Footer() {
  const year = new Date().getFullYear();

  const links = {
    Platform: [
      { label: "Home", href: "#home" },
      { label: "Stats", href: "#stats" },
      { label: "Clients", href: "#clients" },
      { label: "How it works", href: "#how" },
      { label: "FAQ", href: "#faq" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#cta" },
    ],
    Resources: [
      { label: "Case Studies", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Support", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold">
                A
              </div>
              <span className="text-xl font-semibold">
                Accredian <span className="text-blue-400">Enterprise</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering enterprises with structured upskilling programs in collaboration with IITs, IIMs, and global institutions.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {["LinkedIn", "Twitter", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition text-xs font-medium"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-200">
                {section}
              </h4>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 text-sm hover:text-white transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © {year} Accredian Enterprise. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            System operational
          </div>

        </div>
      </div>
    </footer>
  );
}