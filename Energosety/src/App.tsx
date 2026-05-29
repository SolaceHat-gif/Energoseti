import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Branches } from './components/Branches';
import { News } from './components/News';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header onOpenAuth={() => setIsAuthOpen(true)} />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Branches />
        <News />
      </main>
      <Footer />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}

export default App;
