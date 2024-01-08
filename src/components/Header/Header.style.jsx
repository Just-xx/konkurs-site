import styled from 'styled-components';
import { rgba } from 'polished';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacings.xxl};
`;

export const SidebarIcon = styled.i`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacings.sm};
  cursor: pointer;
  background-color: transparent;
  transition: background-color 60ms linear, color 60ms linear;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.lg};
`;