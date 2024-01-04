import styled from 'styled-components';

export const TableCreatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacings.xxxl};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacings.xxl};
`;

export const TableFieldsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacings.md};
`;