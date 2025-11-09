import React from 'react';
import { HeartHandshake, Music, Tag, Stars } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProfileView() {
  const tags = ['Indie music', 'Third-wave coffee', 'Sunday markets', 'Sunset walks'];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop"
            alt="Profile"
            className="h-80 w-full object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-white/70 backdrop-blur px-4 py-2 shadow">
            <div>
              <div className="text-lg font-semibold text-gray-900">Ava, 27</div>
              <div className="text-sm text-gray-600">Designer • ENFP</div>
            </div>
            <Stars className="w-5 h-5 text-rose-500" />
          </div>
        </motion.div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Vibe tags</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full bg-white/70 backdrop-blur px-3 py-1.5 text-sm text-gray-800 shadow border border-white/40">
                  <Tag className="w-4 h-4" /> {t}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white/70 backdrop-blur p-4 border border-white/40">
              <div className="flex items-center gap-2 text-gray-800">
                <Music className="w-4 h-4" />
                <span className="font-medium">Current loop:</span>
                <span className="text-gray-600">Boygenius, FKJ, Tom Misch</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 text-white px-4 py-3 font-medium shadow hover:shadow-md transition">
              <HeartHandshake className="w-5 h-5" /> Suggest Meeting
            </button>
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white/80 backdrop-blur text-gray-900 px-4 py-3 font-medium shadow border border-white/40 hover:shadow-md transition">
              Plan a Date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
