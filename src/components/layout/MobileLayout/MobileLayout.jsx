import React from "react";
import About from "../../sections/About";
import Contacts from "../../sections/Contacts/Contacts";
import Education from "../../sections/Education";
import Skills from "../../sections/Skills/Skills";
import Experience from "../../sections/Experience/Experience";
import AnimatedSection from "../../common/AnimatedSection/AnimatedSection";
import styles from "../../../styles/App.module.css";


const MobileLayout = ({
    t,
    firstExperience,
    remainingExperiences,
    experienceProps,
    contactsData,
    skillsData,
}) => {
    return (
        <div className={styles.mobileLayout}>
            <AnimatedSection delay={0.2}>
                <About title={t.aboutTitle} about={t.aboutText} />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
                <Contacts title={t.contactsTitle} contacts={contactsData} />
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
                <Education title={t.educationTitle} education={t.education} />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
                <Skills
                    skillsTitle={t.skillsTitle}
                    softSkillsTitle={t.softSkillsTitle}
                    languagesTitle={t.languagesTitle}
                    skills={skillsData}
                    showAllLabel={t.showAllTech}
                    hideLabel={t.hideTech}
                />
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
                <Experience
                    title={t.experienceTitle}
                    experience={firstExperience}
                    {...experienceProps}
                />
            </AnimatedSection>

            {remainingExperiences.map((job, index) => (
                <AnimatedSection key={`mobile-${index}`} delay={0.7 + index * 0.1}>
                    <Experience title="" experience={[job]} {...experienceProps} />
                </AnimatedSection>
            ))}
        </div>
    );
};

export default MobileLayout;
