import GlassBlock from "../../GlassBlock/GlassBlock";
import { useIsMobile } from "../../../hooks/useIsMobile";
import ContactLink from "./components/ContactLink";
import ContactText from "./components/ContactText";
import {
  EmailIcon,
  LocationIcon,
  GithubIcon,
  TelegramIcon,
  LinkedinIcon,
  HeadhunterIcon,
} from "./helpers/contactIcons";
import styles from "./styles/Contacts.module.css";

const Contacts = ({ title, contacts }) => {
  const isMobile = useIsMobile();

  return (
    <GlassBlock delay={0.1} accent="top">
      <h2 className={isMobile ? styles.titleMobile : styles.titleDesktop}>
        {title}
      </h2>
      <div className={isMobile ? styles.gridMobile : styles.gridDesktop}>
        <ContactLink
          href={`mailto:${contacts.email}`}
          icon={EmailIcon}
          text={contacts.email}
        />

        <ContactText icon={LocationIcon} text={contacts.location} />

        <ContactLink
          href={`https://${contacts.github}`}
          icon={GithubIcon}
          text="github.com"
          external
        />

        <ContactLink
          href={`https://t.me/${contacts.telegram.replace("@", "")}`}
          icon={TelegramIcon}
          text="Telegram.org"
          external
        />

        {contacts.linkedin && (
          <ContactLink
            href={`https://${contacts.linkedin}`}
            icon={LinkedinIcon}
            text="linkedin.com"
            external
          />
        )}

        {contacts.headhunter && (
          <ContactLink
            href={`https://${contacts.headhunter}`}
            icon={HeadhunterIcon}
            text="HeadHunter.kz"
            external
          />
        )}
      </div>
    </GlassBlock>
  );
};

export default Contacts;
