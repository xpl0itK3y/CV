import React, { useState, useEffect, useMemo } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import TopBar from './components/TopBar';
import Header from './components/sections/Header';
import Contacts from './components/sections/Contacts';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import translations from './data/translations';
import './styles/animations.css';

function App() {
  const [currentLang, setCurrentLang] = useState('ru');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= 768);
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
  };

  // Мемоизируем переводы
  const t = useMemo(() => translations[currentLang], [currentLang]);

  // Разделяем experience на части
  const firstExperiences = t.experiences.slice(0, 1);
  const remainingExperiences = t.experiences.slice(1);
  
  const midPoint = Math.ceil(remainingExperiences.length / 2);
  const leftColumnJobs = remainingExperiences.slice(0, midPoint);
  const rightColumnJobs = remainingExperiences.slice(midPoint);

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <AnimatedBackground />
      
      <TopBar 
        currentLang={currentLang} 
        onLanguageChange={handleLanguageChange}
        translations={t}
      />
      
      <div style={{ 
        padding: isMobile ? '8rem 1rem 2rem 1rem' : '10rem 1.5rem 3rem 1.5rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <Header name={t.name} title={t.title} />
          
          {/* Основная сетка */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '1.25rem' : '1.5rem',
            alignItems: 'start'
          }}>
            {/* Левая колонка - ДЕСКТОП */}
            {!isMobile && (
              <div style={{ 
                animation: 'fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div style={{ animation: 'slideIn 0.6s ease-out 0.2s both' }}>
                  <About 
                    title={t.aboutTitle}
                    about={t.aboutText}
                  />
                </div>
                
                <div style={{ animation: 'slideIn 0.6s ease-out 0.5s both' }}>
                  <Experience 
                    title={t.experienceTitle}
                    experience={firstExperiences}
                  />
                </div>

                {leftColumnJobs.map((job, index) => (
                  <div key={`left-${index}`} style={{ 
                    animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both`
                  }}>
                    <Experience 
                      title=""
                      experience={[job]}
                    />
                  </div>
                ))}
              </div>
            )}
            
            {/* Правая колонка - ДЕСКТОП */}
            {!isMobile && (
              <div style={{ 
                animation: 'fadeInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div style={{ animation: 'slideIn 0.6s ease-out 0.4s both' }}>
                  <Contacts 
                    title={t.contactsTitle}
                    contacts={{
                      email: t.email,
                      phone: t.phone,
                      location: t.location,
                      github: t.github,
                      telegram: t.telegram
                    }}
                  />
                </div>
                
                <div style={{ animation: 'slideIn 0.6s ease-out 0.6s both' }}>
                  <Skills 
                    skillsTitle={t.skillsTitle}
                    softSkillsTitle={t.softSkillsTitle}
                    skills={{
                      technical: t.technicalSkills,
                      soft: t.softSkills
                    }}
                  />
                </div>

                <div style={{ animation: 'slideIn 0.6s ease-out 0.7s both' }}>
                  <Education 
                    title={t.educationTitle}
                    education={t.education}
                  />
                </div>

                {rightColumnJobs.map((job, index) => (
                  <div key={`right-${index}`} style={{ 
                    animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both`
                  }}>
                    <Experience 
                      title=""
                      experience={[job]}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* МОБИЛЬНАЯ версия - сначала все блоки, потом весь опыт */}
            {isMobile && (
              <>
                {/* О себе */}
                <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
                  <About 
                    title={t.aboutTitle}
                    about={t.aboutText}
                  />
                </div>

                {/* Контакты */}
                <div style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
                  <Contacts 
                    title={t.contactsTitle}
                    contacts={{
                      email: t.email,
                      phone: t.phone,
                      location: t.location,
                      github: t.github,
                      telegram: t.telegram
                    }}
                  />
                </div>
                {/* Образование */}
                <div style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}>
                  <Education 
                    title={t.educationTitle}
                    education={t.education}
                  />
                </div>

                {/* Навыки */}
                <div style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
                  <Skills 
                    skillsTitle={t.skillsTitle}
                    softSkillsTitle={t.softSkillsTitle}
                    skills={{
                      technical: t.technicalSkills,
                      soft: t.softSkills
                    }}
                  />
                </div>

                {/* ВЕСЬ ОПЫТ РАБОТЫ ВНИЗУ */}
                {/* Заголовок опыта */}
                <div style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}>
                  <Experience 
                    title={t.experienceTitle}
                    experience={firstExperiences}
                  />
                </div>

                {/* Остальные работы */}
                {remainingExperiences.map((job, index) => (
                  <div key={`mobile-${index}`} style={{ 
                    animation: `fadeInUp 0.6s ease-out ${0.7 + index * 0.1}s both`
                  }}>
                    <Experience 
                      title=""
                      experience={[job]}
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;