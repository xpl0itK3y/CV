import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
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
  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      padding: '3rem 1rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <AnimatedBackground />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Первый блок - на всю ширину */}
        <Header name={resumeData.name} title={resumeData.title} />
        
        {/* Остальные блоки в два столбца */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '2rem',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr'
          }
        }}>
          {/* Левая колонка - анимация слева */}
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
          
          {/* Правая колонка - анимация справа */}
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
  );
}

export default App;