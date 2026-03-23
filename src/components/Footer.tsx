
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy/50 border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <p className="text-sm body-style text-center md:text-left">
              © 2025 PLATHTECH.<br />
              Alle Rechte vorbehalten.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link to="/datenschutz" className="text-sm body-style hover:text-gold transition-colors duration-300">
              Datenschutz
            </Link>
          </div>
        </div>

        {/* Impressum Section */}
        <section className="border-t border-white/10 pt-12" aria-labelledby="impressum-heading">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Impressum Content - Left Side */}
            <div className="text-left">
              <h3 id="impressum-heading" className="text-xl heading-style text-gold mb-6">Impressum</h3>
              <address className="space-y-2 body-style text-white/80 not-italic">
                <p className="font-medium text-white">PLATHTECH INNOVATION & ARTIFICIAL INTELLIGENCE RESEARCH & CONSULTANCIES L.L.C S.O.C</p>
                <p>Managing Director: Christian Plath</p>
                <p>Office S1-252</p>
                <p>PROPERTY INVESTMENT OFFICE 4-S1</p>
                <p>Dubai Investment Park First</p>
                <p>Dubai, United Arab Emirates</p>
                <p>Makani No: 14468 66589</p>
              </address>
            </div>

            {/* Large PLATHTECH Logo - Right Side - Moved further to center-left */}
            <div className="flex justify-center lg:justify-start lg:pl-8 items-center">
              <img
                src="/logos/logo1.jpg"
                alt="PLATHTECH - Innovation & AI Consultancy"
                className="h-160 w-auto opacity-70 hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
