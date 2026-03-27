import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pb-24">
      <header className="bg-white border-b border-slate-200 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">The Mission</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-navy leading-[0.9]">
              About <br />
              <span className="font-serif italic font-medium text-brand-accent">Scout 828</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-serif italic">
              A curated guide to the people and stories behind Western North Carolina's best local businesses.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="prose prose-slate max-w-none space-y-12">
          <div className="space-y-6 text-xl font-serif italic text-slate-600 leading-relaxed">
            <p>
              Scout 828 isn't a traditional directory. We don't list every business in town, and we don't sell top spots to the highest bidder.
            </p>
            <p>
              We believe that the best businesses are built on stories, not just services. Every entry in our guide is the result of a personal interview and a deep dive into what makes that business worth knowing about.
            </p>
            <p>
              Whether you're a local looking for a reliable plumber or a visitor searching for the perfect taco, Scout 828 is your trusted recommendation list for the 828 area code.
            </p>
          </div>

          <div className="bg-slate-50 p-12 rounded-3xl space-y-6">
            <h2 className="text-3xl font-display font-bold text-brand-navy">Who's Behind This?</h2>
            <p className="text-lg text-slate-600 font-serif italic leading-relaxed">
              Scout 828 is produced by <a href="https://pixelatedstories.net" target="_blank" rel="noopener noreferrer" className="text-brand-navy border-b-2 border-brand-accent hover:text-brand-accent transition-colors">Pixelated Stories Digital Marketing</a>, an Asheville-based agency that helps local businesses get found online.
            </p>
            <p className="text-lg text-slate-600 font-serif italic leading-relaxed">
              We saw a gap in how local businesses were being discovered. Algorithms prioritize volume over value. We prioritize the story.
            </p>
          </div>

          <div className="pt-12 text-center">
            <Link
              to="/get-scouted"
              className="inline-block bg-brand-navy text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              Nominate a Business
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
