import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Users, Star, MessageSquare } from 'lucide-react';

const GHL_WEBHOOK_URL = "REPLACE_WITH_GHL_WEBHOOK_URL";

export default function GetScouted() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    industry: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        // Even if it fails (because the URL is a placeholder), we might want to show success for the demo
        // but let's follow the prompt's error handling.
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center space-y-8">
        <div className="flex justify-center">
          <CheckCircle2 size={80} className="text-brand-accent animate-in zoom-in duration-500" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-display font-bold text-brand-navy">Thanks for reaching out!</h1>
          <p className="text-xl text-slate-500 font-serif italic">
            We've received your nomination. We'll be in touch within 2 business days to hear more about your story.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <header className="bg-white border-b border-slate-200 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Join the Directory</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-navy leading-[0.9]">
              Get Scouted <br />
              <span className="font-serif italic font-medium text-brand-accent">for the 828</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-serif italic">
              We're always looking for the best businesses in Asheville and Western North Carolina. If you have a story to tell, we want to hear it.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold text-brand-navy">What You Get</h2>
              <ul className="space-y-6">
                {[
                  "A permanent editorial profile on Scout 828",
                  "Featured in the Scout 828 Weekly newsletter",
                  "A 'Featured on Scout 828' badge for your website",
                  "Your story told by a real person, not an algorithm"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-4 w-5 h-5 bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-brand-accent" />
                    </div>
                    <span className="text-lg text-slate-600 font-serif italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-navy p-10 text-white space-y-6">
              <h3 className="text-xl font-display font-bold">Join the Community</h3>
              <p className="text-slate-400 font-serif italic">
                Join 50+ local businesses already featured on Scout 828. We're building the most trusted guide to the mountains.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-accent transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Business Name</label>
                  <input
                    required
                    type="text"
                    value={formData.businessName}
                    onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-accent transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Industry / Trade</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Bakery, Landscaping, Marketing"
                  value={formData.industry}
                  onChange={e => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-accent transition-colors text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-accent transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-accent transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Tell us about your business</label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-accent transition-colors text-sm resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center text-red-600 text-xs font-bold uppercase tracking-widest bg-red-50 p-4">
                  <AlertCircle size={16} className="mr-2" />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                disabled={status === 'submitting'}
                className="w-full bg-brand-navy text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Request to Be Scouted'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
