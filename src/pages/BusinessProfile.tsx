import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Share2, ExternalLink, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import data from '../data/businesses.json';

export default function BusinessProfile() {
  const { categorySlug, slug } = useParams();
  
  const business = data.businesses.find(b => b.slug === slug);
  const category = data.categories.find(c => c.slug === categorySlug);

  if (!business || !category) {
    return <Navigate to="/404" />;
  }

  const relatedBusinesses = data.businesses
    .filter(b => b.category === category.id && b.id !== business.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${business.name} — Scout 828`,
          text: business.hook,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy link
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "image": business.photo,
    "telephone": business.phone,
    "url": business.website,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Asheville",
      "addressRegion": "NC",
      "streetAddress": business.neighborhood
    },
    "description": business.hook
  };

  return (
    <div className="pb-24">
      <Helmet>
        <title>{business.name} — {business.trade} in Asheville | Scout 828</title>
        <meta name="description" content={`${business.hook} Read ${business.owner}'s story on Scout 828.`} />
        <meta property="og:title" content={`${business.name} — Scout 828`} />
        <meta property="og:description" content={business.hook} />
        <meta property="og:image" content={business.photo} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Hero */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <img
          src={business.photo}
          alt={business.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link 
              to={`/${category.slug}`}
              className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={14} className="mr-2" /> Back to {category.name}
            </Link>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="bg-brand-accent text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5">
                  Featured on Scout 828
                </span>
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                  {business.trade} | {business.neighborhood}
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.85] tracking-tighter">
                {business.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Story */}
            <section className="prose prose-slate max-w-none">
              <div className="text-slate-600 space-y-8 font-serif text-xl leading-relaxed italic">
                {business.story.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              
              <blockquote className="my-16 border-l-4 border-brand-accent pl-8 py-4">
                <p className="text-3xl md:text-4xl font-display font-bold text-brand-navy leading-tight mb-4">
                  "{business.quote}"
                </p>
                <cite className="text-xs font-bold uppercase tracking-widest text-slate-400 not-italic">
                  — The Founder
                </cite>
              </blockquote>
            </section>

            {/* Day in the Life */}
            <section className="bg-white border border-slate-200 p-12 md:p-16 space-y-12">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Insider List</span>
                <h2 className="text-4xl font-display font-bold text-brand-navy">Day in the Life</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-10">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Favorite coffee or breakfast spot?</h4>
                  <p className="text-lg font-serif italic text-brand-navy">"{business.dayInTheLife.coffee}"</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Fitness routine?</h4>
                  <p className="text-lg font-serif italic text-brand-navy">"{business.dayInTheLife.fitness}"</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">New local spot you'd recommend?</h4>
                  <p className="text-lg font-serif italic text-brand-navy">"{business.dayInTheLife.newSpot}"</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">First-time visitor — where do you take them?</h4>
                  <p className="text-lg font-serif italic text-brand-navy">"{business.dayInTheLife.visitorPick}"</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Favorite place to shop local?</h4>
                  <p className="text-lg font-serif italic text-brand-navy">"{business.dayInTheLife.shopLocal}"</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div className="bg-white border border-slate-200 p-10 space-y-8 sticky top-32">
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-navy border-b border-slate-100 pb-4">Business Dossier</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Owner</h4>
                    <p className="text-sm font-semibold text-brand-navy">{business.owner}</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Trade</h4>
                    <p className="text-sm font-semibold text-brand-navy">{business.trade}</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Location</h4>
                    <p className="text-sm font-semibold text-brand-navy">{business.location} — {business.neighborhood}</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Phone</h4>
                    <p className="text-sm font-semibold text-brand-navy">{business.phone}</p>
                  </div>
                </div>

                <a 
                  href={business.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-brand-navy text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
                >
                  Visit Official Site <ExternalLink size={14} className="ml-2" />
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Share This Story</h4>
                <div className="flex space-x-4">
                  <button onClick={handleShare} className="p-3 bg-slate-50 text-brand-navy hover:bg-brand-accent hover:text-white transition-all">
                    <Share2 size={18} />
                  </button>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-50 text-brand-navy hover:bg-blue-600 hover:text-white transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-50 text-brand-navy hover:bg-sky-500 hover:text-white transition-all">
                    <Twitter size={18} />
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noreferrer" className="p-3 bg-slate-50 text-brand-navy hover:bg-blue-700 hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Businesses */}
      {relatedBusinesses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">More to Explore</span>
              <h2 className="text-3xl font-display font-bold text-brand-navy">More in {category.name}</h2>
            </div>
            <Link to={`/${category.slug}`} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-accent">
              View All Entries →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedBusinesses.map((biz) => (
              <Link
                key={biz.id}
                to={`/${biz.category}/${biz.slug}`}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={biz.photo}
                    alt={biz.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-display font-bold text-brand-navy group-hover:text-brand-accent transition-colors">{biz.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{biz.hook}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
