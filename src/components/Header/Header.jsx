import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { HeaderContainer, LogoContainer, SidebarIcon } from './Header.style'
import PropTypes from 'prop-types'

export default function Header({ hideNav }) {
  return (
    <HeaderContainer>
      <LogoContainer>
        {!hideNav && <SidebarIcon className="fa-solid fa-bars-staggered"></SidebarIcon>}
        <Logo />
      </LogoContainer>
      <nav>
      {!hideNav && <Button to="/prezentacja" secondary>Prezentacja wyników</Button>}
      </nav>
    </HeaderContainer>
  );
}

Header.propTypes = {
  hideNav: PropTypes.bool
}
