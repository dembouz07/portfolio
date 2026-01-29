import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CompetitionsSection from "./components/Competitionssection.tsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check user's preferred color scheme or saved preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());

    // Apply dark mode class to the document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
      <div className={isDarkMode ? 'dark' : ''}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <HeroSection isDarkMode={isDarkMode} />
          <AboutSection isDarkMode={isDarkMode} />
          <ProjectsSection isDarkMode={isDarkMode} />
          <CompetitionsSection isDarkMode={isDarkMode} />
          <SkillsSection isDarkMode={isDarkMode} />
          <ContactSection isDarkMode={isDarkMode} />
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
  );
}

export default App;