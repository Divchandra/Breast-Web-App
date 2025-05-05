import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Upload from './components/Upload';
import Methodology from './components/Methodology';
import Footer from './components/footer';

// Typewriter effect component
const TypewriterEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + (text[index] || ''));
      index += 1;
      if (index === text.length) {
        clearInterval(interval); // Stop the interval once all text is displayed
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100 font-sans">
      <header className="text-center p-8 bg-pink-600 text-white rounded-b-2xl shadow-md">
        <h1 className="text-4xl font-bold">Breast Cancer Thermography Classification</h1>
        <p className="text-lg mt-2">AI-powered image analysis for early diagnosis</p>
        <h1 className="text-4xl font-bold">
          <TypewriterEffect text="A   collaboration between UTPL X NITK" speed={100} />
        </h1>
      </header>

      <Navbar />

      <main className="p-8 space-y-8 max-w-4xl mx-auto">
        <section id="about">
          <About />
        </section>

        <section id="upload">
          <Upload />
        </section>

        <section id="methodology">
          <Methodology />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
