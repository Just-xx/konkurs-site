import { LogoAuthor, LogoContainer, LogoIcon, LogoText } from './Logo.style';

export default function Logo() {
  return (
    <LogoContainer>
        <LogoIcon className="fa-solid fa-table logo-img"></LogoIcon>
        <LogoText>System konkursowy<br/><LogoAuthor>by Kubi</LogoAuthor></LogoText>
    </LogoContainer>
  )
}
