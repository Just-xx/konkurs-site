import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme, $sm }) => $sm ? theme.font.sizes.lg : theme.font.sizes.xl};
  font-weight: 700;
  width: 100%;
  text-align: ${props => props.$center ? "center" : "left"};
  margin: 0;
  margin-bottom: ${({ theme, $sm }) => $sm ? 0 : theme.spacings.xl};
  color: ${props => props.theme.colors.text};
`;