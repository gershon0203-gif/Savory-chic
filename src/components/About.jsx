import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'

const stats = [
  { value: '500+', label: 'Events Catered' },
  { value: '50K', label: 'Happy Customers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '12+', label: 'Years Experience' },
]

const team = [
  {
    name: 'Chef Marco Rossi',
    role: 'Executive Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
  },
  {
    name: 'Chef Elena Chen',
    role: 'Pastry Director',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&q=80',
  },
  {
    name: 'Chef David Okafor',
    role: 'Sous Chef',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80',
  },
]

function Counter({ value, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-display font-bold gold-text mb-1">
        {isInView ? value : '0'}
      </div>
      <div className="text-xs uppercase tracking-[0.15em] text-luxe-muted">{label}</div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-luxe-gold font-medium">Our Story</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 leading-tight">
              Where Passion Meets{' '}
              <span className="gold-text">Perfection</span>
            </h2>
            <p className="text-luxe-muted font-inter leading-relaxed mb-6">
              At LUXE, we believe every meal is an opportunity to create something extraordinary.
              Our team of world-class chefs crafts each dish with precision, passion, and an
              unwavering commitment to excellence.
            </p>
            <p className="text-luxe-muted font-inter leading-relaxed mb-8">
              From intimate gatherings to grand celebrations, we bring cinematic dining experiences
              that transform ordinary moments into unforgettable memories.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {[
                'Michelin-star trained culinary team',
                'Locally sourced, seasonal ingredients',
                'Bespoke menu curation for every event',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <IoCheckmarkCircle className="text-luxe-gold text-lg shrink-0" />
                  <span className="text-sm text-luxe-text/80">{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-luxe-gold/30 text-luxe-gold rounded-full text-sm uppercase tracking-wider font-medium hover:bg-luxe-gold/10 transition-all"
            >
              Explore Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                alt="Restaurant interior"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 max-w-[200px]"
            >
              <div className="text-3xl font-display font-bold gold-text">12+</div>
              <div className="text-xs uppercase tracking-wider text-luxe-muted mt-1">Years of Excellence</div>
            </motion.div>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 py-12 border-y border-white/5">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-luxe-gold font-medium">Our Team</span>
            <h3 className="text-2xl md:text-4xl font-display font-bold mt-3">
              Meet the <span className="gold-text">Maestros</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl font-bold">{member.name}</h4>
                  <p className="text-luxe-gold text-sm uppercase tracking-wider mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
