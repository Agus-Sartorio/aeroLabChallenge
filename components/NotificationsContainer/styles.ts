import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 32px 80px;
  display: flex;
  flex-direction: column-reverse;
  pointer-events: none;

  @media (max-width: 375px) {
    padding: 32px 8px;
  }
`;
