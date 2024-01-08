import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const InactiveStyle = css`
  opacity: .5;
  cursor: auto;
  pointer-events: none;
  user-select: none;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  width: ${({ $short }) => $short ? "auto" : "100%"};

  ${({ $inactive }) => $inactive && InactiveStyle};
`;

export const StyledTextInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 10px;
  height: 48px;
  padding: ${({ theme }) => theme.spacings.sm} ${({ theme }) => theme.spacings.md};
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  outline: none;
  transition: border-color 60ms linear, outline-color 60ms linear;
  caret-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textLight};
  outline: 1px solid transparent;

  &::placeholder {
    color: ${({ theme }) => lighten(0.5, theme.colors.textLight)};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.spacings.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.font.sizes.md};

  ${({ $secondary }) => $secondary && css`
    font-weight: 500;
  `};
`;

const ToggleCheckedStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const ToggleCircleCheckedStyles = css`
  background-color: #fff;
  left: 100%;
  transform: translateY(-50%) translateX(calc(-100% - 5px));
`

export const ToggleWrapper = styled.label`
  display: inline-block;
  width: 4.2rem;
  cursor: pointer;
  height: 28px;
  border-radius: 100px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  position: relative;
  transition: all 160ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral5};
  }

  ${({ $checked }) => $checked && ToggleCheckedStyles}
`;

export const ToggleCircle = styled.div`
  position: absolute;
  left: 7px;
  top: 50%;
  transform: translateY(-50%) translateX(0);
  height: 50%;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.borderLight};
  transition: all 160ms ease-in-out;
  will-change: transform, background-color, left;

  ${({ $checked }) => $checked && ToggleCircleCheckedStyles}
`;

export const FileInputLabel = styled.label`
  padding: 12px ${({ theme }) => theme.spacings.lg};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.md};
  cursor: pointer;
`;

export const FileInputEl = styled.input`
  display: none;
`;