import { motion } from 'framer-motion'
import { IoLogoInstagram } from 'react-icons/io5'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', span: '' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-luxe-gold font-medium">Our Gallery</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
            Visual <span className="gold-text">Stories</span>
          </h2>
          <p className="text-luxe-muted font-inter max-w-2xl mx-auto">
            A glimpse into the artistry and elegance that defines every LUXE creation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-all duration-500 flex items-center justify-center">
                <IoLogoInstagram className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
