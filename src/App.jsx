import React, { useState, useMemo } from "react";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import TopBar from "./components/sections/TopBar/TopBar";
import Header from "./components/sections/Header/Header";
import DesktopLayout from "./components/layout/DesktopLayout/DesktopLayout";
import MobileLayout from "./components/layout/MobileLayout/MobileLayout";
import translations from "./data/translations";
import { useIsMobile } from "./hooks/useIsMobile";
import "./styles/animations.css";
import styles from "./styles/App.module.css";


function App() {
  const [currentLang, setCurrentLang] = useState("ru");
  const isMobile = useIsMobile();

  const t = useMemo(() => translations[currentLang], [currentLang]);

  const { firstExperience, leftColumn, rightColumn } = useMemo(() => {
    const [first, ...remaining] = t.experiences;
    return {
      firstExperience: first ? [first] : [],
      leftColumn: remaining.filter((_, i) => i % 2 === 0),
      rightColumn: remaining.filter((_, i) => i % 2 !== 0),
    };
  }, [t.experiences]);

  const experienceProps = {
    totalExperience: t.totalExperience,
    readMoreLabel: t.readMore,
    readLessLabel: t.readLess,
    stackTitle: t.stackTitle,
    showAllTechLabel: t.showAllTech,
    hideTechLabel: t.hideTech,
  };

  const contactsData = {
    email: t.email,
    location: t.location,
    github: t.github,
    telegram: t.telegram,
    linkedin: t.linkedin,
    headhunter: t.headhunter,
  };

  const skillsData = {
    technical: t.technicalSkills,
    soft: t.softSkills,
    languages: t.languages,
  };

  return (
    <div className={styles.appContainer}>
      <AnimatedBackground />

      <TopBar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        translations={t}
      />

      <main className={isMobile ? styles.mainMobile : styles.mainDesktop}>
        <div className={styles.contentWrapper}>
          <Header name={t.name} title={t.title} />

          {isMobile ? (
            <MobileLayout
              t={t}
              firstExperience={firstExperience}
              remainingExperiences={t.experiences.slice(1)}
              experienceProps={experienceProps}
              contactsData={contactsData}
              skillsData={skillsData}
            />
          ) : (
            <DesktopLayout
              t={t}
              firstExperience={firstExperience}
              leftColumn={leftColumn}
              rightColumn={rightColumn}
              experienceProps={experienceProps}
              contactsData={contactsData}
              skillsData={skillsData}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

