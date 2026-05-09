import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-luxe-gold font-medium">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
            Book Your <span className="gold-text">Experience</span>
          </h2>
          <p className="text-luxe-muted font-inter max-w-2xl mx-auto">
            Ready to create something extraordinary? Let's bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-luxe-text placeholder:text-luxe-muted/50 focus:outline-none focus:border-luxe-gold/50 transition-colors font-inter text-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-luxe-text placeholder:text-luxe-muted/50 focus:outline-none focus:border-luxe-gold/50 transition-colors font-inter text-sm"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-luxe-text placeholder:text-luxe-muted/50 focus:outline-none focus:border-luxe-gold/50 transition-colors font-inter text-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-luxe-text placeholder:text-luxe-muted/50 focus:outline-none focus:border-luxe-gold/50 transition-colors font-inter text-sm"
              />
              <select className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-luxe-muted/50 focus:outline-none focus:border-luxe-gold/50 transition-colors font-inter text-sm">
                <option value="">Select Service</option>
                <option value="catering">Catering</option>
                <option value="fine-dining">Fine Dining</option>
                <option value="event-styling">Event Food Styling</option>
                <option value="corporate">Corporate Events</option>
                <option value="desserts">Luxury Desserts</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your event..."
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-luxe-text placeholder:text-luxe-muted/50 focus:outline-none focus:border-luxe-gold/50 transition-colors font-inter text-sm resize-none"
              />
              <button className="w-full py-4 bg-luxe-gold text-luxe-dark font-semibold rounded-xl text-sm uppercase tracking-[0.15em] hover:bg-luxe-goldLight transition-all duration-300">
                Send Inquiry
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-2xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: HiMail, label: 'hello@luxe.com', href: 'mailto:hello@luxe.com' },
                  { icon: HiPhone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                  { icon: HiLocationMarker, label: '123 Gourmet Avenue, New York, NY 10001' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 text-luxe-muted hover:text-luxe-gold transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-luxe-gold/10 flex items-center justify-center group-hover:bg-luxe-gold/20 transition-colors">
                      <item.icon className="text-luxe-gold text-lg" />
                    </div>
                    <span className="font-inter text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: FaInstagram, label: 'Instagram' },
                  { icon: FaFacebookF, label: 'Facebook' },
                  { icon: FaTwitter, label: 'Twitter' },
                  { icon: FaPinterestP, label: 'Pinterest' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-luxe-muted hover:border-luxe-gold/30 hover:text-luxe-gold hover:bg-luxe-gold/5 transition-all"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-2">Stay Inspired</h3>
              <p className="text-luxe-muted text-sm font-inter mb-4">
                Subscribe for exclusive menus, event inspiration, and offers.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-luxe-text placeholder:text-luxe-muted/50 focus:outline-none focus:border-luxe-gold/50 transition-colors font-inter text-sm"
                />
                <button className="px-6 py-3 bg-luxe-gold text-luxe-dark font-semibold rounded-xl text-xs uppercase tracking-wider hover:bg-luxe-goldLight transition-all shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
