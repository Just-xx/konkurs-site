import styled from 'styled-components';

export const BannerContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral10};
  padding: ${({ theme }) => theme.spacings.lg};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.md};
  user-select: none;
`;

export const BannerImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;