import { Mail,   ArrowUpRight } from "lucide-react";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
 import GetInTouchForm from "./GetInTouchForm";
import type { IconType } from "react-icons";

 
interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: typeof Mail|IconType;
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: "edoo55205@gmail.com",
    href: "mailto:edoo55205@gmail.com",
    icon: Mail,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Eyad-sakr",
    href: "https://github.com/Eyad-sakr",
    icon: VscGithubAlt,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/eyad-sakr",
    href: "https://www.linkedin.com/in/eyad-sakr-b21375318?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: CiLinkedin,
  },
];

export default function Contact() {
 
  
  return (
    <section className="contact-section" id="Contact">
      <div className="contact-Heading">
         <span className="contact-eyebrow">// Get In Touch</span>

        <h2 className="contact-heading">
          Let&apos;s <span className="contact-heading-accent">Collaborate</span>
        </h2>
      </div>

      <div className="contact-container">

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              I&apos;m currently open to freelance projects, full-time
              opportunities, and exciting collaborations. Drop me a message —
              I respond within 24 hours.
            </p>

            <div className="contact-cards">
              {CONTACT_LINKS.map(({ id, label, value, href, icon: Icon }) => (
                <a
                  key={id}
                  className="contact-card glass-card"
                  href={href}
                  target={id === "email" ? undefined : "_blank"}
                  rel={id === "email" ? undefined : "noreferrer"}
                >
                  <span className="contact-card-icon">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>

                  <span className="contact-card-text">
                    <span className="contact-card-label">{label}</span>
                    <span className="contact-card-value">{value}</span>
                  </span>

                  <ArrowUpRight
                    className="contact-card-arrow"
                    size={16}
                    strokeWidth={1.75}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right column — form */}
         <GetInTouchForm   />
        </div>
      </div>
    </section>
  );
}