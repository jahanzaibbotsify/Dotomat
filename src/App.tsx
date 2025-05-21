import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initializeAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div className="font-mono text-white bg-primary min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;