
import PropTypes from 'prop-types';
import { ButtonContainer, IconButtonContainer, LinkButtonContainer, LinkIcon, IconButtonI } from './Button.style';

export default function Button({ children, secondary, to, noIcon, ...props}) {
  if (to) {
    return (
      <LinkButtonContainer $secondary={secondary} to={to} {...props}>
        {children}
        {!noIcon && <LinkIcon className="fa-solid fa-up-right-from-square"></LinkIcon>}
      </LinkButtonContainer>
    )
  }

  return (
    <ButtonContainer $secondary={secondary} {...props}>
      {children}
    </ButtonContainer>
  )
}

export function IconButton({ icon, ...props}) {
  return (
    <IconButtonContainer {...props}>
      <IconButtonI className={icon}></IconButtonI>
    </IconButtonContainer>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  to: PropTypes.string,
  noIcon: PropTypes.bool,
}