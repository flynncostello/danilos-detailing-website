import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import InstagramFeed from './components/InstagramFeed';
import TestimonialsFooter from './components/TestimonialsFooter';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <InstagramFeed />
      <TestimonialsFooter />
    </div>
  );
}

export default App;
