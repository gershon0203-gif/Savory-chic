import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const services = [
  {
    title: 'Catering',
    desc: 'Full-service catering for weddings, galas, and exclusive events with bespoke menus tailored to your vision.',
    icon: '🍽️',
    color: 'from-luxe-gold/20 to-transparent',
  },
  {
    title: 'Fine Dining',
    desc: 'An intimate fine dining experience featuring multi-course tasting menus paired with exceptional wines.',
    icon: '🌟',
    color: 'from-luxe-red/20 to-transparent',
  },
  {
    title: 'Event Food Styling',
    desc: 'Cinematic food presentation and styling that elevates your event into a visual masterpiece.',
    icon: '🎨',
    color: 'from-luxe-gold/20 to-transparent',
  },
  {
    title: 'Corporate Events',
    desc: 'Impress clients and teams with premium corporate catering, from board meetings to company galas.',
    icon: '💼',
    color: 'from-luxe-red/20 to-transparent',
  },
  {
    title: 'Luxury Desserts',
    desc: 'Artisanal dessert bars, custom cakes, and patisserie creations that are as beautiful as they are delicious.',
    icon: '🍰',
    color: 'from-luxe-gold/20 to-transparent',
  },
  {
    title: 'Private Chefs',
    desc: 'In-home private chef experiences for intimate dinners, celebrations, and exclusive gatherings.',
    icon: '👨‍🍳',
    color: 'from-luxe-red/20 to-transparent',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-luxe-dark2 via-transparent to-luxe-dark2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-luxe-gold font-medium">What We Offer</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
            Premium <span className="gold-text">Services</span>
          </h2>
          <p className="text-luxe-muted font-inter max-w-2xl mx-auto">
            From intimate dinners to grand celebrations, we bring culinary excellence to every occasion.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group gradient-border relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8 bg-luxe-dark3/80 backdrop-blur-sm h-full">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-luxe-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-luxe-muted text-sm font-inter leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-luxe-gold text-xs uppercase tracking-wider font-medium group/link"
                >
                  Learn More
                  <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
