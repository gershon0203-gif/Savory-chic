import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoStar, IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { BsQuote } from 'react-icons/bs'

const testimonials = [
  {
    name: 'Victoria Chen',
    role: 'Wedding Planner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text: 'LUXE transformed our gala into an absolute masterpiece. The attention to detail, the presentation, and most importantly the flavors were beyond anything we could have imagined. Our guests are still talking about it.',
    rating: 5,
  },
  {
    name: 'James Mitchell',
    role: 'Corporate Events Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    text: 'Working with LUXE has been nothing short of extraordinary. They bring a level of sophistication and creativity that elevates every event. Their team is professional, passionate, and incredibly talented.',
    rating: 5,
  },
  {
    name: 'Sophia Laurent',
    role: 'Fashion Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    text: 'The private dining experience was cinematic. Every course was a work of art, perfectly paired with exceptional wines. Chef Marco and his team created an evening we will cherish forever.',
    rating: 5,
  },
  {
    name: 'Alexander Park',
    role: 'Hotel General Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    text: 'We partnered with LUXE for our hotel\'s anniversary celebration and it was flawless. Their ability to cater for 300+ guests while maintaining Michelin-level quality is truly impressive.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const goNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const goPrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section id="testimonials" className="relative py-24 md:py-32 section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxe-dark via-transparent to-luxe-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-luxe-gold font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
            What Our <span className="gold-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="glass rounded-2xl p-8 md:p-12 w-full"
              >
                <BsQuote className="text-4xl text-luxe-gold/30 mb-6" />
                <p className="text-lg md:text-xl font-inter leading-relaxed text-luxe-text/90 mb-8">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-display font-bold text-lg">{testimonials[current].name}</h4>
                    <p className="text-sm text-luxe-muted">{testimonials[current].role}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <IoStar key={i} className="text-luxe-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="p-2 rounded-full border border-white/10 text-luxe-muted hover:border-luxe-gold/30 hover:text-luxe-gold transition-all"
            >
              <IoChevronBack />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-luxe-gold w-6' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="p-2 rounded-full border border-white/10 text-luxe-muted hover:border-luxe-gold/30 hover:text-luxe-gold transition-all"
            >
              <IoChevronForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
