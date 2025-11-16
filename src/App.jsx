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
      
      {/* Тестовый компонент - проверка загрузки данных */}
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <Header name={resumeData.name} title={resumeData.title} />
        <Contacts contacts={resumeData.contacts} />
        <About about={resumeData.about} />
        <Experience experience={resumeData.experience} />
        <Skills skills={resumeData.skills} />
        <Projects projects={resumeData.projects} />
        <Education education={resumeData.education} />
      </div>
    </div>
  );
}

export default App;