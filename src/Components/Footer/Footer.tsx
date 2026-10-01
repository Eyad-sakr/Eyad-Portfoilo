import { CONTACT_LINKS_STATIC } from "../GetInTouch/Contact"
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Eyad Sakr. Built with React & TypeScript.
      </p>

      <div className="footer-socials">
        {CONTACT_LINKS_STATIC.map(({ id, href, icon: Icon}) => (
          <a
            key={id}
            href={href}
            target={id === "email" ? undefined : "_blank"}
            rel={id === "email" ? undefined : "noreferrer"}
          >
            <Icon size={18} strokeWidth={1.75} />
          </a>
        ))}
      </div>
    </footer>
  );
}