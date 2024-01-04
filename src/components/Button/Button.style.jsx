import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SecondaryButtonStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`

export const ButtonContainer = styled.button`
  padding: calc(${({ theme }) => theme.spacings.sm} + 4px) ${({ theme }) => theme.spacings.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 60ms linear;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  gap: ${({ theme }) => theme.spacings.sm};


  ${props => props.$secondary && SecondaryButtonStyles};
`;

export const LinkButtonContainer = styled(ButtonContainer).attrs({ as: Link })`
  text-decoration: none;
`;

export const LinkIcon = styled.i`
  opacity: .8;
`;

export const IconButtonContainer = styled(ButtonContainer)`
  ${SecondaryButtonStyles};
  aspect-ratio: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border: none;

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.colors.primaryLight)};
  }
`;

export const IconButtonI = styled.i`
  font-size: ${({ theme }) => theme.font.sizes.lg};
`;