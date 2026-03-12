import React from "react";
import About from "../../sections/About";
import Experience from "../../sections/Experience/Experience";
import Contacts from "../../sections/Contacts/Contacts";
import Skills from "../../sections/Skills/Skills";
import Education from "../../sections/Education";
import AnimatedSection from "../../common/AnimatedSection/AnimatedSection";
import styles from "../../../styles/App.module.css";


const DesktopLayout = ({
    t,
    firstExperience,
    leftColumn,
    rightColumn,
    experienceProps,
    contactsData,
    skillsData,
}) => {
    return (
        <div className={styles.desktopGrid}>
            <div className={styles.leftColumn}>
                <AnimatedSection delay={0.2}>
                    <About title={t.aboutTitle} about={t.aboutText} />
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                    <Experience
                        title={t.experienceTitle}
                        experience={firstExperience}
                        {...experienceProps}
                    />
                </AnimatedSection>

                {leftColumn.map((job, index) => (
                    <AnimatedSection key={`left-${index}`} delay={0.8 + index * 0.1}>
                        <Experience title="" experience={[job]} {...experienceProps} />
                    </AnimatedSection>
                ))}
            </div>

            <div className={styles.rightColumn}>
                <AnimatedSection delay={0.4}>
                    <Contacts title={t.contactsTitle} contacts={contactsData} />
                </AnimatedSection>

                <AnimatedSection delay={0.6}>
                    <Skills
                        skillsTitle={t.skillsTitle}
                        softSkillsTitle={t.softSkillsTitle}
                        languagesTitle={t.languagesTitle}
                        skills={skillsData}
                        showAllLabel={t.showAllTech}
                        hideLabel={t.hideTech}
                    />
                </AnimatedSection>

                <AnimatedSection delay={0.7}>
                    <Education title={t.educationTitle} education={t.education} />
                </AnimatedSection>

                {rightColumn.map((job, index) => (
                    <AnimatedSection key={`right-${index}`} delay={0.8 + index * 0.1}>
                        <Experience title="" experience={[job]} {...experienceProps} />
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default DesktopLayout;
