import styled from 'styled-components';

export const TableFieldsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacings.md};
`;