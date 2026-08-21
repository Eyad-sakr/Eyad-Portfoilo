import { CONTACT_LINKS } from "../GetInTouch/Contact"
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Eyad Sakr. Built with React & TypeScript.
      </p>

      <div className="footer-socials">
        {CONTACT_LINKS.map(({ id, href, icon: Icon, label }) => (
          <a
            key={id}
            href={href}
            target={id === "email" ? undefined : "_blank"}
            rel={id === "email" ? undefined : "noreferrer"}
            aria-label={label}
          >
            <Icon size={18} strokeWidth={1.75} />
          </a>
        ))}
      </div>
    </footer>
  );
}