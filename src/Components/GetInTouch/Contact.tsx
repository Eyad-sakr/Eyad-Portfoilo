import { Mail, ArrowUpRight } from "lucide-react"
import { VscGithubAlt } from "react-icons/vsc"
import { CiLinkedin } from "react-icons/ci"
import { useTranslation } from "react-i18next"
import GetInTouchForm from "./GetInTouchForm"
import type { IconType } from "react-icons"

interface ContactLinkStatic {
  id: string
  value: string
  href: string
  icon: typeof Mail | IconType
}

interface ContactLinkTranslated {
  id: string
  label: string
}

export const CONTACT_LINKS_STATIC: ContactLinkStatic[] = [
  {
    id: "email",
    value: "edoo55205@gmail.com",
    href: "mailto:edoo55205@gmail.com",
    icon: Mail,
  },
  {
    id: "github",
    value: "github.com/Eyad-sakr",
    href: "https://github.com/Eyad-sakr",
    icon: VscGithubAlt,
  },
  {
    id: "linkedin",
    value: "linkedin.com/in/eyad-sakr",
    href: "https://www.linkedin.com/in/eyad-sakr-b21375318?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: CiLinkedin,
  },
]

export default function Contact() {
  const { t } = useTranslation()
  const translatedLinks = t('contact.links', { returnObjects: true }) as unknown as ContactLinkTranslated[]

  const mergedLinks = CONTACT_LINKS_STATIC.map((staticLink) => ({
    ...staticLink,
    label: translatedLinks.find((l) => l.id === staticLink.id)?.label ?? staticLink.id,
  }))

  return (
    <section className="contact-section" id="Contact">
      <div className="contact-Heading">
        <span className="contact-eyebrow">{t('contact.eyebrow')}</span>

        <h2 className="contact-heading">
          {t('contact.headingPart1')}{" "}
          <span className="contact-heading-accent">{t('contact.headingPart2')}</span>
        </h2>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">{t('contact.intro')}</p>

            <div className="contact-cards">
              {mergedLinks.map(({ id, label, value, href, icon: Icon }) => (
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

                  <ArrowUpRight className="contact-card-arrow" size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <GetInTouchForm />
        </div>
      </div>
    </section>
  )
}