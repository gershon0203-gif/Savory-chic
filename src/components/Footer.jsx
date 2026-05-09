import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#hero" className="text-3xl font-display font-bold gold-text tracking-wide">LUXE</a>
            <p className="text-luxe-muted text-sm font-inter mt-4 leading-relaxed max-w-xs">
              Crafting unforgettable food experiences for those who demand the extraordinary.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaFacebookF, label: 'Facebook' },
                { icon: FaTwitter, label: 'Twitter' },
                { icon: FaPinterestP, label: 'Pinterest' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-luxe-muted hover:border-luxe-gold/30 hover:text-luxe-gold transition-all text-sm"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Menu', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-luxe-muted text-sm font-inter hover:text-luxe-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {['Catering', 'Fine Dining', 'Event Styling', 'Corporate Events', 'Private Chefs'].map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-luxe-muted text-sm font-inter hover:text-luxe-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-luxe-muted text-sm font-inter mb-4">
              Get exclusive recipes, event tips, and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-l-xl text-luxe-text placeholder:text-luxe-muted/50 focus:outline-none focus:border-luxe-gold/50 transition-colors font-inter text-sm"
              />
              <button className="px-5 py-3 bg-luxe-gold text-luxe-dark font-semibold rounded-r-xl text-xs uppercase tracking-wider hover:bg-luxe-goldLight transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-luxe-muted text-xs font-inter">
            © 2026 LUXE. All rights reserved.
          </p>
          <p className="text-luxe-muted text-xs font-inter flex items-center gap-1">
            Made with <HiHeart className="text-luxe-red" /> by LUXE Team
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-luxe-muted text-xs font-inter hover:text-luxe-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-luxe-muted text-xs font-inter hover:text-luxe-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
