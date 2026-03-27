import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Categories', path: '/#categories' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo-horizontal.png" 
                alt="Scout 828" 
                className="h-12 w-auto brightness-0" 
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide uppercase transition-colors hover:text-brand-accent ${
                    isActive ? 'text-brand-accent' : 'text-brand-navy'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/get-scouted"
              className="bg-brand-navy text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
            >
              Get Scouted
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy hover:text-brand-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-semibold tracking-wide uppercase ${
                  isActive ? 'text-brand-accent' : 'text-brand-navy'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/get-scouted"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-brand-navy text-white px-6 py-4 text-center text-xs font-bold uppercase tracking-widest"
          >
            Get Scouted
          </Link>
        </div>
      )}
    </nav>
  );
}
