import { GithubIcon } from "../../Contacts/helpers/contactIcons";
import styles from "../styles/Projects.module.css";

const ProjectItem = ({ project, stackTitle, isMobile }) => {
  const { name, tagline, meta, description, highlights, technologies, links } =
    project;

  return (
    <article className={styles.project}>
      <h3 className={isMobile ? styles.nameMobile : styles.nameDesktop}>
        {name}
      </h3>
      {tagline && <p className={styles.tagline}>{tagline}</p>}

      {meta?.length > 0 && (
        <div className={isMobile ? styles.metaMobile : styles.metaDesktop}>
          {meta.map((item) => (
            <span key={item} className={styles.metaItem}>
              {item}
            </span>
          ))}
        </div>
      )}

      <div className={isMobile ? styles.bodyMobile : styles.bodyDesktop}>
        <p className={styles.description}>{description}</p>
        {highlights?.length > 0 && (
          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item} className={styles.highlight}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {technologies?.length > 0 && (
        <div className={styles.stack}>
          <div className={styles.stackTitle}>{stackTitle}</div>
          <ul className={styles.techList}>
            {technologies.map((tech) => (
              <li
                key={tech}
                className={isMobile ? styles.techTagMobile : styles.techTagDesktop}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {links?.length > 0 && (
        <div className={styles.links}>
          {links.map(({ label, url }, index) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              // The first link is the project's own site, the rest are secondary
              className={`${styles.link} ${index === 0 ? styles.linkPrimary : ""}`}
            >
              {url.includes("github.com") && <GithubIcon />}
              <span>{label}</span>
              <span className={styles.linkArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
};

export default ProjectItem;
