import React from 'react';
import { Link } from 'react-router-dom';
import navbarLogo from '../logo.png';
import footerLogo from '../logo1.png';

export default function Logo({ 
  light = false, 
  variant = '', 
  className = '', 
  imgClassName = '',
  showTagline = false 
}) {
  const isFooter = light || variant === 'footer';
  const logoSrc = isFooter ? footerLogo : navbarLogo;

  return (
    <Link
      to="/"
      aria-label="RELINFINITE PROJEXIVE PVT. LTD - Home"
      className={`inline-flex items-center group transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <img
          src={logoSrc}
          alt="RELINFINITE PROJEXIVE PVT. LTD - Industrial EPC & PEB"
          className={`h-11 sm:h-12 md:h-13 w-auto object-contain transition-all duration-300 ${
            isFooter 
              ? 'filter drop-shadow-[0_2px_12px_rgba(59,130,246,0.3)] brightness-105' 
              : 'filter drop-shadow-sm'
          } ${imgClassName}`}
          loading="eager"
        />
      </div>
    </Link>
  );
}
