import styled from "styled-components";

export const StyledSection = styled.section`
  background-image: var(--illustration-bg);
  height: 528px;
  margin-top: 150px;

  .container {
    position: relative;
  }

  .card {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -75px;
  }

  .card:first-child {
    transform: translateX(-130%) rotate(-3deg);
  }

  .card:last-child {
    transform: translateX(30%) rotate(3deg);
  }

  @media (max-width: 1024px) {
    padding: 150px 0 32px;
    height: auto;
    margin-top: -190px;

    .card,
    .card:first-child,
    .card:last-child {
      position: static;
      transform: none;
      margin: 0 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .container {
      display: flex;
    }
  }
`;
