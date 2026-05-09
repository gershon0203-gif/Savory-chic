import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['Starters', 'Main Course', 'Desserts', 'Drinks']

const menuItems = {
  'Starters': [
    { name: 'Truffle Foam Soup', desc: 'Wild mushroom velouté with black truffle oil and crispy sage', price: '$24', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80' },
    { name: 'Seared Scallops', desc: 'Diver scallops with cauliflower purée and caviar', price: '$32', img: 'https://images.unsplash.com/photo-1599084993091-1cb5c07e8c56?w=600&q=80' },
    { name: 'Wagyu Tartare', desc: 'Hand-cut wagyu with quail egg and truffle aioli', price: '$38', img: 'https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?w=600&q=80' },
  ],
  'Main Course': [
    { name: 'Herb-Crusted Rack of Lamb', desc: 'New Zealand lamb with rosemary jus and seasonal vegetables', price: '$58', img: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=600&q=80' },
    { name: 'Pan-Seared Salmon', desc: 'Atlantic salmon with dill beurre blanc and asparagus', price: '$44', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80' },
    { name: 'Lobster Linguine', desc: 'Fresh Maine lobster with saffron cream sauce', price: '$52', img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80' },
  ],
  'Desserts': [
    { name: 'Dark Chocolate Soufflé', desc: 'Valrhona chocolate with vanilla bean crème anglaise', price: '$22', img: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&q=80' },
    { name: 'Crème Brûlée Trio', desc: 'Classic vanilla, lavender honey, and espresso', price: '$18', img: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80' },
    { name: 'Golden Tiramisu', desc: 'Mascarpone with gold leaf and cocoa dust', price: '$20', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80' },
  ],
  'Drinks': [
    { name: 'Signature Gold Rush', desc: 'Bourbon, honey, lemon, gold leaf', price: '$18', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80' },
    { name: 'French 75', desc: 'Champagne, gin, lemon, sugar', price: '$16', img: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=600&q=80' },
    { name: 'Espresso Martini', desc: 'Vodka, Kahlúa, fresh espresso, vanilla', price: '$16', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80' },
  ],
}

export default function Menu() {
  const [activeCat, setActiveCat] = useState('Starters')

  return (
    <section id="menu" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-luxe-gold font-medium">Curated Selection</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
            Featured <span className="gold-text">Menu</span>
          </h2>
          <p className="text-luxe-muted font-inter max-w-2xl mx-auto">
            A taste of what we offer — each dish crafted with precision and passion.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2.5 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                activeCat === cat
                  ? 'bg-luxe-gold text-luxe-dark'
                  : 'border border-white/10 text-luxe-muted hover:border-luxe-gold/30 hover:text-luxe-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuItems[activeCat].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1.5 glass rounded-full text-sm font-display font-bold text-luxe-gold">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-display text-lg font-bold group-hover:text-luxe-gold transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-luxe-muted text-sm font-inter mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
