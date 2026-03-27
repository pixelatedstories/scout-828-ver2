import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import data from '../data/businesses.json';

export default function Home() {
  const featuredBusinesses = data.businesses.filter(b => b.featured).slice(0, 6);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center space-x-2 bg-brand-accent/10 px-4 py-2">
                <span className="w-2 h-2 bg-brand-accent animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy">Now Scouting Asheville & WNC</span>
              </div>
              <h1 className="text-6xl md:text-[100px] font-display font-bold leading-[0.85] tracking-tighter text-brand-navy">
                Your guide to the <br />
                <span className="font-serif italic font-medium text-brand-accent">best of the 828.</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-serif italic">
                We find the best local businesses in Asheville and Western North Carolina, interview the people behind them, and tell their stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/get-scouted"
                  className="inline-block bg-brand-navy text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 text-center"
                >
                  Nominate a Business
                </Link>
                <Link
                  to="/about"
                  className="inline-block border border-slate-200 bg-white text-brand-navy px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all text-center"
                >
                  Our Mission
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000"
                  alt="Asheville Vibe"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">Browse by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {data.categories.map((cat, index) => {
            const Icon = (Icons as any)[cat.icon] || Icons.HelpCircle;
            const count = data.businesses.filter(b => b.category === cat.id).length;
            
            // Bento grid logic
            const gridClasses = [
              "md:col-span-2 md:row-span-2", // 1st item
              "md:col-span-1 md:row-span-1", // 2nd item
              "md:col-span-1 md:row-span-1", // 3rd item
              "md:col-span-1 md:row-span-1", // 4th item
              "md:col-span-1 md:row-span-1", // 5th item
              "md:col-span-2 md:row-span-1", // 6th item
            ];

            const bgImages = [
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1501503060445-73887c48af73?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800",
            ];

            return (
              <Link
                key={cat.id}
                to={`/${cat.slug}`}
                className={`group relative overflow-hidden bg-brand-navy flex flex-col justify-end p-8 transition-all duration-500 hover:shadow-2xl ${gridClasses[index] || ""}`}
              >
                <img 
                  src={bgImages[index] || bgImages[0]} 
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-80"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-1">{cat.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                      {count} {count === 1 ? 'Selection' : 'Selections'}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent block mb-4">The Latest</span>
            <h2 className="text-4xl font-display font-bold text-brand-navy">Recently Scouted</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredBusinesses.map((biz) => (
              <Link
                key={biz.id}
                to={`/${biz.category}/${biz.slug}`}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  {biz.photo 
                    ? <img
                        src={biz.photo}
                        alt={biz.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    : <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Photo Coming Soon</span>
                      </div>
                  }
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-navy/90 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 backdrop-blur-sm">
                      {biz.subcategory}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-display font-bold text-brand-navy group-hover:text-brand-accent transition-colors">{biz.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{biz.hook}</p>
                  <div className="pt-4 flex items-center text-[10px] font-bold uppercase tracking-widest text-brand-navy">
                    Read Their Story <Icons.ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-brand-navy p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-8 group">
              <div className="text-8xl font-display font-bold text-white/5 group-hover:text-brand-accent/20 transition-colors duration-500">01</div>
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold">We Scout</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-serif italic">We find businesses worth knowing about. No pay-to-play, just real quality and authentic stories.</p>
              </div>
            </div>
            <div className="space-y-8 group">
              <div className="text-8xl font-display font-bold text-white/5 group-hover:text-brand-accent/20 transition-colors duration-500">02</div>
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold">We Interview</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-serif italic">We sit down and hear their story. We want to know the "why" behind the work and the people behind the brand.</p>
              </div>
            </div>
            <div className="space-y-8 group">
              <div className="text-8xl font-display font-bold text-white/5 group-hover:text-brand-accent/20 transition-colors duration-500">03</div>
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold">We Feature</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-serif italic">They get a permanent home on Scout 828. A curated record of Asheville's best for locals and explorers.</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 -mr-64 -mt-64 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 -ml-32 -mb-32 blur-[100px]" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-100 p-12 md:p-24 text-center space-y-10 relative shadow-2xl shadow-slate-200/50 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-accent"></div>
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">Stay Informed</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">The Scout 828 Weekly</h2>
            <p className="text-slate-500 text-xl font-serif italic max-w-2xl mx-auto">Events, stories, and the best of the 828. One email a week.</p>
          </div>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-8 py-5 bg-slate-50 border border-slate-100 focus:outline-none focus:border-brand-accent transition-colors text-sm"
            />
            <button className="bg-brand-navy text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-brand-navy/20">
              Join the List
            </button>
          </form>
          <div className="flex items-center justify-center space-x-4 pt-4">
            <div className="h-px w-12 bg-slate-200"></div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">No spam. Only the good stuff.</p>
            <div className="h-px w-12 bg-slate-200"></div>
          </div>
        </div>
      </section>

      {/* Get Scouted CTA */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-display font-bold text-brand-navy">Know a business that should be here?</h2>
        <Link
          to="/get-scouted"
          className="inline-block border-2 border-brand-navy text-brand-navy px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all"
        >
          Nominate Them Now
        </Link>
      </section>
    </div>
  );
}
