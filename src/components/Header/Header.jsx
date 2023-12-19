import "./Header.css";
import Logo from "../Logos/Logo/Logo";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <Link
          className="navlink"
          to="prezentacja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Przejdź do wyników</span>
          <i className="fa-solid fa-up-right-from-square"></i>
        </Link>
        <button disabled className="navlink btn--inactive">Eksportuj wyniki</button>
        <Button inactive fileInput>Załaduj z pliku</Button>
      </nav>
    </header>
  );
}
