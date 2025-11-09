import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Building2, Coffee, GalleryVerticalEnd } from 'lucide-react';
import { motion } from 'framer-motion';

const placesSeed = [
  { id: 1, name: 'Lumen Cafe', type: 'Cafe', rating: 4.7, distance: '0.6 km', icon: Coffee },
  { id: 2, name: 'Fern Park', type: 'Park', rating: 4.5, distance: '1.2 km', icon: Building2 },
  { id: 3, name: 'Iris Gallery', type: 'Art Gallery', rating: 4.9, distance: '2.1 km', icon: GalleryVerticalEnd },
];

export default function DatePlanner() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }
  }, []);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-rose-50 p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-800">
          <MapPin className="w-5 h-5" />
          <span className="font-semibold">Suggested nearby</span>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-sm shadow border border-white/40">
          <Calendar className="w-4 h-4" /> Open Planner
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {placesSeed.map((p) => {
          const Icon = p.icon;
          return (
            <motion.div key={p.id} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white/70 backdrop-blur p-4 shadow border border-white/40">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-900">{p.name}</div>
                  <div className="text-sm text-gray-600">{p.type} • {p.distance}</div>
                </div>
                <div className="inline-flex items-center gap-1 text-rose-500 font-medium">★ {p.rating}</div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-gray-700"><Icon className="w-4 h-4" /> Curated for your vibe</div>
                <div className="flex gap-2">
                  <button className="rounded-lg bg-gray-900 text-white px-3 py-2 text-sm">Meet here</button>
                  <button className="rounded-lg bg-white/80 backdrop-blur px-3 py-2 text-sm border border-white/40">Book a table</button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 text-sm text-gray-500">
        {coords ? (
          <span>Using your location ~ {coords.lat.toFixed(3)}, {coords.lng.toFixed(3)}</span>
        ) : (
          <span>Enable location to get perfect spots around you.</span>
        )}
      </div>
    </div>
  );
}
