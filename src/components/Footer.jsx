import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, MapPin, Phone, Mail, Globe, ArrowUpRight, ShieldCheck, UserCheck, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { footerLinks, socialLinks } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#06101e] via-[#040b15] to-[#02060c] text-white pt-16 pb-12 border-t border-slate-800/80 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eye-Catchy Quick Connect Banner with Animated WhatsApp and Call Action */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/95 via-blue-950/60 to-slate-900/95 border border-blue-500/25 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 animate-spin text-amber-400" />
                <span>Immediate Project Consultation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ready to Build Your Next Industrial Project?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Connect directly with our engineering and project management team via Call or WhatsApp.
              </p>
            </div>

            {/* Animated Call & WhatsApp Quick Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 w-full lg:w-auto">
              {/* Animated Direct Call Button */}
              <a
                href={`tel:${footerLinks.contactInfo.phone}`}
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
              >
                {/* Pulsing ring behind icon */}
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-white/20 items-center justify-center">
                    <PhoneCall className="w-3.5 h-3.5 text-white animate-bounce" />
                  </span>
                </span>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] text-blue-200 uppercase font-semibold tracking-wider">Direct Call</span>
                  <span className="text-sm font-extrabold tracking-wide">{footerLinks.contactInfo.displayPhone}</span>
                </div>
              </a>

              {/* Animated WhatsApp Button */}
              <a
                href={footerLinks.contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                {/* WhatsApp pulse ring */}
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-white/20 items-center justify-center">
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                  </span>
                </span>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] text-emerald-200 uppercase font-semibold tracking-wider">Instant Chat</span>
                  <span className="text-sm font-extrabold tracking-wide">WhatsApp Us</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Brand & Identity with logo1.png (span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-6 p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 inline-block shadow-inner backdrop-blur-xs">
              <Logo light={true} variant="footer" imgClassName="h-12 sm:h-14 md:h-16 w-auto object-contain" />
            </div>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              <strong className="text-white font-semibold">RELINFINITE PROJEXIVE PVT. LTD</strong> is a premier industrial EPC &amp; infrastructure turnkey powerhouse delivering world-class engineering from Concept to Completion across India.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Precision civil engineering, certified safety compliance, and rapid pre-engineered building (PEB) execution for chemical complexes, manufacturing units, and heavy logistics facilities.
            </p>

            {/* Social Media Links with Verified URLs & Open in New Tab */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Connect With Us:</p>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/relinfiniteprojexive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Relinfinite on Instagram"
                  className="group relative w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-600 hover:border-pink-500 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-pink-500/25 hover:scale-110"
                >
                  <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61593684225255"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Relinfinite on Facebook"
                  className="group relative w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-blue-500/25 hover:scale-110"
                >
                  <Facebook className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/79715331/admin?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_dashboard_index%3Bb5f0d5d3-54f4-4b4e-b494-720cefc80d5d"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Relinfinite on LinkedIn"
                  className="group relative w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-blue-600/25 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-4 pb-2 border-b border-slate-800/80">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Verticals & Services (span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-4 pb-2 border-b border-slate-800/80">
              EPC VERTICALS
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services#industrial-construction" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors block font-medium">
                  Industrial Construction Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#industrial-construction" className="text-xs text-slate-400 hover:text-sky-300 transition-colors block pl-2 border-l border-slate-800">
                  • Chemical Plant Civil Works
                </Link>
              </li>
              <li>
                <Link to="/services#industrial-construction" className="text-xs text-slate-400 hover:text-sky-300 transition-colors block pl-2 border-l border-slate-800">
                  • Power Plant Structural Works
                </Link>
              </li>
              <li>
                <Link to="/services#peb-buildings" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors block mt-3 font-medium">
                  Pre-Engineered Buildings (PEB)
                </Link>
              </li>
              <li>
                <Link to="/services#peb-buildings" className="text-xs text-slate-400 hover:text-sky-300 transition-colors block pl-2 border-l border-slate-800">
                  • Warehouses &amp; Logistics Hubs
                </Link>
              </li>
              <li>
                <Link to="/services#peb-buildings" className="text-xs text-slate-400 hover:text-sky-300 transition-colors block pl-2 border-l border-slate-800">
                  • Large-Span Industrial Sheds
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-4 pb-2 border-b border-slate-800/80">
              CONTACT INFO
            </h4>

            {/* Director Highlights */}
            <div className="mb-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400 mb-0.5">
                <UserCheck className="w-3.5 h-3.5" />
                <span>{footerLinks.contactInfo.contactPerson}</span>
              </div>
              <span className="text-[11px] text-slate-400">{footerLinks.contactInfo.designation}</span>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">{footerLinks.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${footerLinks.contactInfo.phone}`} className="hover:text-white transition-colors font-bold text-slate-200">
                  {footerLinks.contactInfo.displayPhone || footerLinks.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${footerLinks.contactInfo.email}`} className="hover:text-white transition-colors truncate font-medium text-slate-200">
                  {footerLinks.contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-slate-300">
                  {footerLinks.contactInfo.website}
                </span>
              </li>
            </ul>

            <div className="mt-4 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400">
              <span className="text-sky-400 font-semibold block mb-0.5">Response SLA:</span>
              <span>Technical team responds within 24–48 hours.</span>
            </div>
          </div>
        </div>

        {/* SEO Keyword Pills Bar */}
        <div className="py-6 border-t border-slate-800/80 mb-8">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Industrial EPC Core Capabilities in India:
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800">EPC company in India</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800">Industrial EPC contractor</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800">Industrial construction company India</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800">Pre-engineered building (PEB) manufacturer</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800">Warehouse construction company India</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800">Civil construction for chemical plants</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800">Power plant civil construction contractor</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800">PEB structures for warehouses India</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 RELINFINITE PROJEXIVE PVT. LTD. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
