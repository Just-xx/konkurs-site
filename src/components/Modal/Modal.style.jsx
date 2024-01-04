import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fff;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacings.xxl};
  z-index: 1000;
  max-width: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 101;
`;

export const ModalTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-weight: 600;
  text-align: left;
  width: 100%;
`;

export const ModalCloseButton = styled.button`
  background-color: transparent;
  padding: ${({ theme }) => theme.spacings.md};
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;
  opacity: .5;
`;

export const Dimm = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const ModalBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;