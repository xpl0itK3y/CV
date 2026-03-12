import GlassBlock from "../../../GlassBlock/GlassBlock";
import { getSkillIcon } from "../helpers/skillIconHelper";
import styles from "../styles/SkillList.module.css";

const SkillList = ({ skillsTitle, softSkillsTitle, skills }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <GlassBlock delay={0.4}>
            <h2
                className={`${styles.title} ${isMobile ? styles.titleMobile : styles.titleDesktop
                    }`}
            >
                {skillsTitle}
            </h2>

            <div
                className={`${styles.techSkillsContainer} ${isMobile ? styles.techSkillsGapMobile : styles.techSkillsGapDesktop
                    }`}
            >
                {skills.technical.map((skill, index) => (
                    <div
                        key={index}
                        className={`${styles.skillItem} ${isMobile ? styles.skillItemMobile : styles.skillItemDesktop
                            }`}
                        onMouseEnter={() => setHoveredSkill(index)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        {getSkillIcon(skill.name) ? (
                            <img
                                src={getSkillIcon(skill.name)}
                                alt={skill.name}
                                className={styles.skillImage}
                                onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.parentElement.innerHTML =
                                        '<span class="' + styles.skillPlaceholder + '">💻</span>';
                                }}
                            />
                        ) : (
                            <span className={styles.skillPlaceholder}>💻</span>
                        )}

                        {hoveredSkill === index && (
                            <div className={styles.tooltip}>
                                {skill.name}
                                {/* Стрелка вверх */}
                                <div className={styles.tooltipArrow} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <h3
                className={`${styles.softSkillsTitle} ${isMobile
                    ? styles.softSkillsTitleMobile
                    : styles.softSkillsTitleDesktop
                    }`}
            >
                {softSkillsTitle}
            </h3>
            <div className={styles.softSkillsContainer}>
                {skills.soft.map((skill, index) => (
                    <span
                        key={index}
                        className={`${styles.softSkillItem} ${isMobile
                            ? styles.softSkillItemMobile
                            : styles.softSkillItemDesktop
                            }`}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </GlassBlock>
    );
};

export default SkillList;