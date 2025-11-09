import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const sample = [
  { id: 1, name: 'Maya', img: 'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?q=80&w=1887&auto=format&fit=crop' },
  { id: 2, name: 'Liam', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=crop' },
  { id: 3, name: 'Noah', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop' },
];

export default function MatchCarousel() {
  const [cards, setCards] = useState(sample);
  const [matched, setMatched] = useState(null);

  const swipe = (dir) => {
    const [top, ...rest] = cards;
    if (!top) return;
    if (dir === 'right') {
      setMatched(top);
      setTimeout(() => setMatched(null), 1800);
    }
    setCards([...rest, top]);
  };

  return (
    <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white to-rose-50 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 backdrop-blur-0" />
      </div>

      <div className="mx-auto max-w-xl h-96 relative">
        <AnimatePresence>
          {cards.slice(0, 2).map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 120) swipe('right');
                else if (info.offset.x < -120) swipe('left');
              }}
              className={`absolute inset-0 rounded-3xl shadow-xl ${idx === 0 ? 'z-20' : 'z-10'} bg-white/60 backdrop-blur border border-white/40 overflow-hidden`}
            >
              <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/40 to-transparent text-white">
                <div className="text-lg font-semibold">{c.name}</div>
                <div className="inline-flex items-center gap-1 text-sm opacity-90">
                  <Sparkles className="w-4 h-4" /> High match
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={() => swipe('left')} className="rounded-full px-6 py-3 bg-white/80 backdrop-blur text-gray-900 shadow border border-white/40">Pass</button>
        <button onClick={() => swipe('right')} className="rounded-full px-6 py-3 bg-gray-900 text-white shadow">Let's Meet</button>
      </div>

      <AnimatePresence>
        {matched && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="rounded-3xl px-8 py-6 bg-white/80 backdrop-blur shadow-xl border border-white/40 text-center"
            >
              <div className="text-2xl font-semibold">It's a Match!</div>
              <div className="mt-1 text-gray-600">Plan a date now</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
