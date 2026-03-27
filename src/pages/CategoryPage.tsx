import { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import data from '../data/businesses.json';

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const [activeSubcategory, setActiveSubcategory] = useState('All');

  const category = data.categories.find(c => c.slug === categorySlug);

  if (!category) {
    return <Navigate to="/404" />;
  }

  const businesses = useMemo(() => {
    let filtered = data.businesses.filter(b => b.category === category.id);
    if (activeSubcategory !== 'All') {
      filtered = filtered.filter(b => b.subcategory === activeSubcategory);
    }
    return filtered;
  }, [category.id, activeSubcategory]);

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Archives</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-navy leading-[0.9]">
              Best {category.name} <br />
              <span className="font-serif italic font-medium text-brand-accent">in Asheville & WNC</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-serif italic">
              {category.intro}
            </p>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveSubcategory('All')}
              className={`whitespace-nowrap px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeSubcategory === 'All'
                  ? 'bg-brand-navy text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            {category.subcategories.map(sub => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`whitespace-nowrap px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeSubcategory === sub
                    ? 'bg-brand-navy text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Business Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {businesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {businesses.map((biz) => (
              <Link
                key={biz.id}
                to={`/${biz.category}/${biz.slug}`}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={biz.photo}
                    alt={biz.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
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
                    Read Their Story <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 space-y-6">
            <p className="text-slate-400 font-serif italic text-xl">We haven't scouted any businesses in this subcategory yet.</p>
            <Link to="/get-scouted" className="inline-block text-brand-accent font-bold uppercase tracking-widest text-xs border-b-2 border-brand-accent pb-1">
              Nominate one now
            </Link>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-slate-50 p-12 md:p-20 text-center space-y-8">
          <h2 className="text-3xl font-display font-bold text-brand-navy">Know a {category.name.toLowerCase()} business that should be here?</h2>
          <p className="text-slate-500 font-serif italic text-lg">Our curation is community-driven. If you've discovered a hidden gem, we want to hear about it.</p>
          <Link
            to="/get-scouted"
            className="inline-block bg-brand-navy text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
          >
            Nominate Them
          </Link>
        </div>
      </section>
    </div>
  );
}
