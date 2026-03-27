import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="mb-6 block">
              <img 
                src="/logo-stacked.png" 
                alt="Scout 828" 
                className="h-24 w-auto" 
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-slate-500 max-w-sm font-serif italic text-lg">
              "The definitive guide for the modern explorer."
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-slate-600 hover:text-brand-accent transition-colors">About</Link></li>
              <li><Link to="/get-scouted" className="text-sm text-slate-600 hover:text-brand-accent transition-colors">Get Scouted</Link></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-brand-accent transition-colors">Newsletter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-slate-600 hover:text-brand-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-brand-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-brand-accent transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <p>© {new Date().getFullYear()} SCOUT 828. ALL RIGHTS RESERVED.</p>
          <p>PRODUCED BY <a href="https://pixelatedstories.net" target="_blank" rel="noopener noreferrer" className="text-brand-navy hover:text-brand-accent">PIXELATED STORIES DIGITAL MARKETING</a></p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-navy">Privacy Policy</a>
            <a href="#" className="hover:text-brand-navy">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
