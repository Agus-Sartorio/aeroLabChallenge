import styled from "styled-components";

export const StyledNavBar = styled.nav`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    background: url("/assets/icons/aerolab-logo-1.svg");
    width: 126px;
    height: 48px;
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;

    a {
      background: url("/assets/icons/aerolab-logo-2.svg");
      width: 38px;
      height: 36px;
      background-size: cover;
    }
  }
`;
