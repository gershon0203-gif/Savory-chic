import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { IoStar } from 'react-icons/io5'

const floatingItems = [
  { emoji: '🍽️', className: 'top-20 left-[10%] text-4xl animate-float' },
  { emoji: '🍷', className: 'top-40 right-[15%] text-3xl animate-float-delayed' },
  { emoji: '✨', className: 'bottom-32 left-[20%] text-2xl animate-float' },
  { emoji: '🌿', className: 'bottom-40 right-[10%] text-3xl animate-float-delayed' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Gourmet food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 to-transparent" />
      </div>

      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + i * 0.3, duration: 0.8 }}
          className={`absolute ${item.className} opacity-30 md:opacity-50 pointer-events-none`}
        >
          {item.emoji}
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <IoStar className="text-luxe-gold text-sm" />
          <span className="text-xs uppercase tracking-[0.2em] text-luxe-gold font-medium">Premium Culinary Excellence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-[1.1] mb-6 text-balance"
        >
          Crafting{' '}
          <span className="gold-text">Unforgettable</span>
          <br />
          Food Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-luxe-muted max-w-2xl mx-auto mb-10 font-inter font-light leading-relaxed"
        >
          Modern catering, premium dining, and creative culinary solutions
          crafted for those who demand extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-luxe-gold text-luxe-dark font-semibold rounded-full text-sm uppercase tracking-[0.15em] hover:bg-luxe-goldLight transition-all duration-300 flex items-center justify-center gap-2"
          >
            Book a Consultation
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#menu"
            className="px-8 py-4 border border-luxe-text/20 text-luxe-text font-medium rounded-full text-sm uppercase tracking-[0.15em] hover:border-luxe-gold/50 hover:text-luxe-gold transition-all duration-300"
          >
            View Menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { label: 'Events', value: '500+' },
            { label: 'Happy Clients', value: '50K' },
            { label: 'Rating', value: '4.9' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold gold-text">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.15em] text-luxe-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  )
}
