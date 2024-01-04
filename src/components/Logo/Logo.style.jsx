import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm};
  cursor: default;
  user-select: none;
`;

export const LogoIcon = styled.i`
  font-size: ${({ theme }) => theme.font.sizes.xxl};
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.primary};
`;

export const LogoText = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primary};
`;

export const LogoAuthor = styled.span`
  opacity: .6;
`
