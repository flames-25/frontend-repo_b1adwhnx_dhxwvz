import React, { useState } from 'react';
import { Smile, Flame, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VibeScore() {
  const [chem, setChem] = useState(70);
  const [energy, setEnergy] = useState(60);
  const [comfort, setComfort] = useState(80);

  const Bar = ({ value, color, label, icon: Icon }) => (
    <div className="rounded-2xl bg-white/70 backdrop-blur p-4 border border-white/40">
      <div className="mb-2 flex items-center gap-2 text-gray-800 font-medium">
        <Icon className="w-4 h-4" /> {label}
      </div>
      <div className="h-3 rounded-full bg-gray-200/60 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.6 }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
      <div className="mt-2 text-sm text-gray-600">{value}%</div>
    </div>
  );

  return (
    <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-rose-50 to-violet-50">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vibe Score</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <Bar value={chem} color="bg-gradient-to-r from-rose-400 to-pink-500" label="Chemistry" icon={Heart} />
        <Bar value={energy} color="bg-gradient-to-r from-amber-400 to-orange-500" label="Energy" icon={Flame} />
        <Bar value={comfort} color="bg-gradient-to-r from-indigo-400 to-violet-500" label="Comfort" icon={Smile} />
      </div>
      <div className="mt-6 flex gap-3">
        <button onClick={() => { setChem(80); setEnergy(70); setComfort(90); }} className="rounded-xl bg-gray-900 text-white px-4 py-3 font-medium shadow">Save Rating</button>
        <button className="rounded-xl bg-white/80 backdrop-blur px-4 py-3 font-medium border border-white/40">Share Feedback</button>
      </div>
    </div>
  );
}
