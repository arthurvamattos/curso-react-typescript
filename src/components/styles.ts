import { transparentize } from "polished";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`  
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: ${(props) => transparentize(0.04, props.theme.colors.black)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: ${(props) => `0.25rem solid ${props.theme.colors.pink}`};
  border-left-color: ${(props) => transparentize(0.8, props.theme.colors.pink)};
  animation: ${rotateAnimation} 2s infinite;
`;
