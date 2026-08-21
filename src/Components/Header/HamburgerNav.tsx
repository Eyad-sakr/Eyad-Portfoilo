import { RxHamburgerMenu } from "react-icons/rx";
interface proptype {
  isOpen:boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function HamburgerNav({ isOpen, setIsOpen }:proptype) {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="Hamburger"
      >
        <RxHamburgerMenu />
      </button>
      <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <li>Services</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default HamburgerNav