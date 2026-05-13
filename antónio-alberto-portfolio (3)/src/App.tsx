import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Academics from './components/Academics';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <div className="font-sans antialiased text-slate-800 bg-slate-50 selection:bg-gold-500 selection:text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Gallery />
          <Academics />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
