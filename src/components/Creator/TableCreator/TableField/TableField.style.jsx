import { darken, rgba } from 'polished';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TableFieldContainer = styled(motion.div)`
  padding: ${({ theme }) => theme.spacings.md};
  background-color: ${({ theme }) => theme.colors.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  max-width: 200px;
  width: 100%;
  gap: 4px;
  cursor: pointer;
  transition: background-color 40ms linear;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => darken(0.02, theme.colors.card)};
  }
`;

export const TableFieldBadge = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  font-weight: 600;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backgroundColor};
  padding: 4px ${({ theme }) => theme.spacings.sm};
  border-radius: 5px;
  pointer-events: none;
`;

export const TableFieldName = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-weight: 600;
  pointer-events: none;
`;

export const FunctionButtons = styled(motion.div)`
  position: absolute;
  bottom: -${({ theme }) => theme.spacings.sm};
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacings.sm};
`;

export const RemoveButton = styled.i`
  width: ${({ theme }) => theme.spacings.lg};
  height: ${({ theme }) => theme.spacings.lg};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => rgba(theme.colors.danger, 0.7)};
  background-color: ${({ theme }) => rgba(theme.colors.danger, 0.1)};
  transition: background-color 40ms linear;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.danger, 0.2)};
  }
`;

export const EditButton = styled(RemoveButton)`
  color: ${({ theme }) => rgba(theme.colors.primary, 0.7)};
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.primary, 0.2)};
  }
`;