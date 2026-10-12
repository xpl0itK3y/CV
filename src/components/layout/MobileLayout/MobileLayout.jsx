import React from "react";
import About from "../../sections/About";
import Contacts from "../../sections/Contacts/Contacts";
import Education from "../../sections/Education";
import Skills from "../../sections/Skills/Skills";
import Experience from "../../sections/Experience/Experience";
import Projects from "../../sections/Projects/Projects";
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
            <AnimatedSection delay={0.3}>
                <About title={t.aboutTitle} about={t.aboutText} facts={t.aboutFacts} />
            </AnimatedSection>

            <AnimatedSection delay={0.36}>
                <Contacts title={t.contactsTitle} contacts={contactsData} />
            </AnimatedSection>

            <AnimatedSection delay={0.42}>
                <Education
                    title={t.educationTitle}
                    education={t.education}
                    accent="top"
                />
            </AnimatedSection>

            <AnimatedSection delay={0.48}>
                <Skills
                    skillsTitle={t.skillsTitle}
                    softSkillsTitle={t.softSkillsTitle}
                    workPracticesTitle={t.workPracticesTitle}
                    languagesTitle={t.languagesTitle}
                    skills={skillsData}
                    showAllLabel={t.showAllTech}
                    hideLabel={t.hideTech}
                />
            </AnimatedSection>

            <AnimatedSection delay={0.54}>
                <Experience
                    title={t.experienceTitle}
                    experience={firstExperience}
                    {...experienceProps}
                />
            </AnimatedSection>

            {remainingExperiences.map((job, index) => (
                <AnimatedSection key={`mobile-${index}`} delay={0.6 + index * 0.06}>
                    <Experience title="" experience={[job]} {...experienceProps} />
                </AnimatedSection>
            ))}

            <AnimatedSection delay={0.6 + remainingExperiences.length * 0.06}>
                <Projects
                    title={t.projectsTitle}
                    projects={t.projects}
                    stackTitle={t.stackTitle}
                    releaseLabel={t.latestReleaseLabel}
                />
            </AnimatedSection>
        </div>
    );
};

export default MobileLayout;
