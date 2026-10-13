import { GithubIcon } from "../../Contacts/helpers/contactIcons";
import { releasesUrl } from "../helpers/latestRelease";
import { useLatestRelease } from "../hooks/useLatestRelease";
import styles from "../styles/Projects.module.css";
import ProjectLogo from "./ProjectLogo";

const ProjectItem = ({ project, stackTitle, releaseLabel, isMobile }) => {
  const { name, repo, logo, tagline, meta, description, highlights, technologies, links } =
    project;
  const version = useLatestRelease(repo, project.version);
  // The version badge already leads to the release; the PDF has no badge
  const siteLinks = links?.filter((link) => !link.pdfOnly);

  return (
    <article className={styles.project}>
      <div className={styles.head}>
        <h3 className={isMobile ? styles.nameMobile : styles.nameDesktop}>
          {logo && (
            <ProjectLogo src={`${import.meta.env.BASE_URL || "/"}${logo}`} />
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

      {siteLinks?.length > 0 && (
        <div className={styles.links}>
          {siteLinks.map(({ label, url }, index) => (
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
