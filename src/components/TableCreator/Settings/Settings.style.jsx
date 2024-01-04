import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const collapsedStyles = css`
  height: ${({ theme }) => theme.spacings.xxxl};
  padding: ${({ theme }) => theme.spacings.xl};
  opacity: .8;
`

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacings.xxl};
  border: 1px solid ${({ theme }) => theme.colors.neutral10};
  border-radius: 10px;
  margin: ${({ theme }) => theme.spacings.xxl} 0 ${({ theme }) => theme.spacings.xl};
  gap: ${({ theme }) => theme.spacings.xl};
  ${({ $collapsed }) => $collapsed && collapsedStyles}
  position: relative;
`;

export const OptionWrapper = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.neutral5};
  width: 100%;
  padding: ${({ theme }) => theme.spacings.xl};
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacings.xxl};
  flex-wrap: wrap;
`;

const ExpandedIconStyles = css`
  top: ${({ theme }) => theme.spacings.md};
  right: ${({ theme }) => theme.spacings.md};
  transform: translateY(0);
  margin-top: ${({ theme }) => theme.spacings.xl};
  margin-right: ${({ theme }) => theme.spacings.xl};
`

export const ExpandIcon = styled.i`
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  padding: ${({ theme }) => theme.spacings.md};
  margin-right: ${({ theme }) => theme.spacings.md};
  transform: translateY(-50%);
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral5};
  }

  ${({ $expanded }) => $expanded && ExpandedIconStyles}
`;