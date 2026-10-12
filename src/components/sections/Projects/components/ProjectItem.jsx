import { GithubIcon } from "../../Contacts/helpers/contactIcons";
import { releasesUrl } from "../helpers/latestRelease";
import { useLatestRelease } from "../hooks/useLatestRelease";
import styles from "../styles/Projects.module.css";

const ProjectItem = ({ project, stackTitle, releaseLabel, isMobile }) => {
  const { name, repo, logo, tagline, meta, description, highlights, technologies, links } =
    project;
  const version = useLatestRelease(repo, project.version);

  return (
    <article className={styles.project}>
      <div className={styles.head}>
        <h3 className={isMobile ? styles.nameMobile : styles.nameDesktop}>
          {/* The name stands next to it, so the icon itself says nothing */}
          {logo && (
            <span className={styles.logo}>
              <img
                src={`${import.meta.env.BASE_URL || "/"}${logo}`}
                alt=""
                width="144"
                height="144"
                decoding="async"
              />
            </span>
          )}
          {name}
        </h3>
        {version && (
          <a
            href={repo ? releasesUrl(repo) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.version}
            title={releaseLabel}
            aria-label={`${releaseLabel} ${version}`}
          >
            <span className={styles.versionDot} aria-hidden="true" />
            {version}
          </a>
        )}
      </div>
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
            {highlights.map(({ title, text }) => (
              <li key={title} className={styles.highlight}>
                <span className={styles.highlightTitle}>{title}</span>
                <span className={styles.highlightText}>{text}</span>
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
