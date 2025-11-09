import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Compass, Music } from 'lucide-react';

const questions = [
  {
    id: 'weekend',
    prompt: 'How do you like to spend a weekend?',
    options: ['Slow brunch', 'Nature hike', 'Art & galleries', 'Live music', 'New cafes'],
    icon: <Compass className="w-5 h-5" />,
  },
  {
    id: 'energy',
    prompt: "Your vibe today?",
    options: ['Chill', 'Curious', 'Playful', 'Romantic', 'Spontaneous'],
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: 'music',
    prompt: 'Your soundtrack?',
    options: ['Indie', 'R&B', 'House', 'Classical', 'Hip-hop'],
    icon: <Music className="w-5 h-5" />,
  },
  {
    id: 'meet',
    prompt: 'How soon would you meet?',
    options: ["Tonight", 'This week', 'Weekend', 'When it feels right'],
    icon: <Heart className="w-5 h-5" />,
  },
];

export default function OnboardingFlow({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const current = questions[step];

  const selectOption = (opt) => {
    const next = { ...answers, [current.id]: opt };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onComplete?.(next);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-white to-violet-100" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-16 h-72 w-72 bg-gradient-to-br from-rose-300/50 to-purple-300/40 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 bg-gradient-to-br from-amber-300/40 to-pink-300/40 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl text-center"
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-4 py-2 shadow-sm">
              {current.icon}
              <span className="text-sm font-medium text-gray-700">Meetly Onboarding</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              {current.prompt}
            </h2>
            <p className="text-gray-600 mb-8">Your answers shape your vibe match. No chat, just chemistry.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {current.options.map((opt) => (
                <motion.button
                  key={opt}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -2 }}
                  onClick={() => selectOption(opt)}
                  className="group relative rounded-2xl bg-white/70 backdrop-blur shadow-sm hover:shadow-md border border-white/40 px-5 py-4 text-left"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 to-white/30 opacity-0 group-hover:opacity-100 transition" />
                  <span className="relative z-10 text-gray-800 font-medium">{opt}</span>
                </motion.button>
              ))}
            </div>

            <div className="mt-8 text-sm text-gray-500">Step {step + 1} of {questions.length}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
