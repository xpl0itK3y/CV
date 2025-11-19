import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import TopBar from './components/TopBar';
import Header from './components/sections/Header';
import Contacts from './components/sections/Contacts';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import resumeData from './data/resumeData';
import './styles/animations.css';

function App() {
  const [currentLang, setCurrentLang] = useState('ru');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    console.log('Язык изменен на:', lang);
  };

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <AnimatedBackground />
      
      {/* Верхняя панель с переключателем языка */}
      <TopBar currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      
      {/* Основной контент */}
      <div style={{ 
        padding: isMobile ? '8rem 1rem 2rem 1rem' : '10rem 1.5rem 3rem 1.5rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          {/* Первый блок - на всю ширину */}
          <Header name={resumeData.name} title={resumeData.title} />
          
          {/* Остальные блоки в два столбца / один столбец на мобильных */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem',
          }}>
            {/* Левая колонка */}
            <div style={{ animation: 'fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both' }}>
              <div style={{ animation: 'slideIn 0.6s ease-out 0.3s both' }}>
                <About about={resumeData.about} />
              </div>
              <div style={{ animation: 'slideIn 0.6s ease-out 0.5s both' }}>
                <Experience experience={resumeData.experience} />
              </div>
              <div style={{ animation: 'slideIn 0.6s ease-out 0.7s both' }}>
                <Education education={resumeData.education} />
              </div>
            </div>
            
            {/* Правая колонка */}
            <div style={{ animation: 'fadeInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both' }}>
              <div style={{ animation: 'slideIn 0.6s ease-out 0.4s both' }}>
                <Contacts contacts={resumeData.contacts} />
              </div>
              <div style={{ animation: 'slideIn 0.6s ease-out 0.6s both' }}>
                <Skills skills={resumeData.skills} />
              </div>
              <div style={{ animation: 'slideIn 0.6s ease-out 0.8s both' }}>
                <Projects projects={resumeData.projects} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;