import React, { useState } from 'react';
import { Phone, MessageCircle, PhoneCall, X } from 'lucide-react';
import { footerLinks } from '../data/navigation';

export default function FloatingContactWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside aria-label="Quick Connect floating tools" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 print:hidden">
      {/* WhatsApp Floating Button */}
      <div className="relative group">
        <a
          href={footerLinks.contactInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp +91 80458 00695"
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-xl shadow-emerald-600/40 hover:shadow-emerald-500/60 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        >
          {/* Animated Glowing Ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping opacity-60 pointer-events-none" />
          
          <MessageCircle className="w-7 h-7 fill-white/20 text-white relative z-10 transition-transform group-hover:scale-110" />
        </a>

        {/* Hover Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:group-hover:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-emerald-500/30 whitespace-nowrap backdrop-blur-md pointer-events-none transition-all duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Chat on WhatsApp</span>
        </div>
      </div>

      {/* Direct Call Floating Button */}
      <div className="relative group">
        <a
          href={`tel:${footerLinks.contactInfo.phone}`}
          aria-label="Call Relinfinite at +91 80458 00695"
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 text-white shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/40"
        >
          {/* Animated Call Ring */}
          <span className="absolute -inset-1 rounded-full bg-sky-400/40 animate-ping opacity-60 pointer-events-none" style={{ animationDuration: '2s' }} />
          
          <PhoneCall className="w-6 h-6 text-white relative z-10 animate-bounce" style={{ animationDuration: '2.5s' }} />
        </a>

        {/* Hover Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:group-hover:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-blue-500/30 whitespace-nowrap backdrop-blur-md pointer-events-none transition-all duration-200">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span>Call: {footerLinks.contactInfo.displayPhone}</span>
        </div>
      </div>
    </aside>
  );
}
