import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import data from '../data/businesses.json';

export default function NotFound() {
  return (
    <div className="pb-24">
      <header className="bg-white border-b border-slate-200 pt-32 pb-24 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Error 404</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-navy leading-[0.9]">
            We couldn't find <br />
            <span className="font-serif italic font-medium text-brand-accent">that one.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-serif italic">
            That page doesn't exist or may have moved. Try browsing by category.
          </p>
          <div className="pt-8">
            <Link to="/" className="text-xs font-bold uppercase tracking-widest text-brand-navy border-b-2 border-brand-navy pb-1 hover:text-brand-accent hover:border-brand-accent transition-all">
              Back to Scout 828 →
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {data.categories.map((cat) => {
            const Icon = (Icons as any)[cat.icon] || Icons.HelpCircle;
            const count = data.businesses.filter(b => b.category === cat.id).length;
            
            return (
              <Link
                key={cat.id}
                to={`/${cat.slug}`}
                className="group relative aspect-square md:aspect-video bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-brand-accent transition-all hover:shadow-lg overflow-hidden"
              >
                <div className="relative z-10">
                  <Icon size={32} className="text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-bold text-brand-navy">{cat.name}</h3>
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {count} {count === 1 ? 'Selection' : 'Selections'}
                  </span>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 group-hover:bg-brand-accent/5 transition-colors" />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
