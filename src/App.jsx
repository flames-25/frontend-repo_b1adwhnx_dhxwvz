import React, { useState } from 'react';
import OnboardingFlow from './components/OnboardingFlow';
import ProfileView from './components/ProfileView';
import MatchCarousel from './components/MatchCarousel';
import DatePlanner from './components/DatePlanner';
import VibeScore from './components/VibeScore';

function App() {
  const [finished, setFinished] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-ivory-50 to-violet-50 text-gray-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/50 border-b border-white/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">Meetly</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#onboarding" className="hover:text-gray-900">Onboarding</a>
            <a href="#profile" className="hover:text-gray-900">Profile</a>
            <a href="#matches" className="hover:text-gray-900">Matches</a>
            <a href="#planner" className="hover:text-gray-900">Planner</a>
            <a href="#vibe" className="hover:text-gray-900">Vibe Score</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12 md:space-y-16">
        <section id="onboarding" className="h-[520px] md:h-[560px]">
          <OnboardingFlow onComplete={() => setFinished(true)} />
        </section>

        <section id="profile" className="space-y-4">
          <h2 className="text-3xl font-semibold">Profile</h2>
          <p className="text-gray-600">Minimal, aesthetic, and focused on real-world chemistry.</p>
          <ProfileView />
        </section>

        <section id="matches" className="space-y-4">
          <h2 className="text-3xl font-semibold">Matches</h2>
          <p className="text-gray-600">Swipe to meet. No chat — just vibes and timing.</p>
          <MatchCarousel />
        </section>

        <section id="planner" className="space-y-4">
          <h2 className="text-3xl font-semibold">Date Suggestions</h2>
          <p className="text-gray-600">Smart suggestions for cafes, parks, and galleries near you.</p>
          <DatePlanner />
        </section>

        <section id="vibe" className="space-y-4">
          <h2 className="text-3xl font-semibold">Vibe Score</h2>
          <p className="text-gray-600">Rate the chemistry, energy, and comfort after you meet.</p>
          <VibeScore />
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        Built with care • Meetly — no-chat, just-meet
      </footer>
    </div>
  );
}

export default App;
