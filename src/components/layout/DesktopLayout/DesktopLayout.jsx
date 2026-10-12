import React from "react";
import About from "../../sections/About";
import Experience from "../../sections/Experience/Experience";
import Contacts from "../../sections/Contacts/Contacts";
import Skills from "../../sections/Skills/Skills";
import Education from "../../sections/Education";
import Projects from "../../sections/Projects/Projects";
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
                <AnimatedSection delay={0.3}>
                    <About title={t.aboutTitle} about={t.aboutText} facts={t.aboutFacts} />
                </AnimatedSection>

                {/* The left column is the shorter one: the projects even them out */}
                <AnimatedSection delay={0.42}>
                    <Projects
                        title={t.projectsTitle}
                        projects={t.projects}
                        stackTitle={t.stackTitle}
                    />
                </AnimatedSection>

                <AnimatedSection delay={0.48}>
                    <Experience
                        title={t.experienceTitle}
                        experience={firstExperience}
                        {...experienceProps}
                    />
                </AnimatedSection>

                {leftColumn.map((job, index) => (
                    <AnimatedSection key={`left-${index}`} delay={0.6 + index * 0.06}>
                        <Experience title="" experience={[job]} {...experienceProps} />
                    </AnimatedSection>
                ))}
            </div>

            <div className={styles.rightColumn}>
                <AnimatedSection delay={0.36}>
                    <Contacts title={t.contactsTitle} contacts={contactsData} />
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
                    <Education title={t.educationTitle} education={t.education} />
                </AnimatedSection>

                {rightColumn.map((job, index) => (
                    <AnimatedSection key={`right-${index}`} delay={0.6 + index * 0.06}>
                        <Experience title="" experience={[job]} {...experienceProps} />
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default DesktopLayout;
