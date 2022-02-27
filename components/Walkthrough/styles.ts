import styled from "styled-components";

export const StyledSection = styled.section`
  background-image: var(--illustration-bg);
  height: 528px;
  margin-top: 150px;

  .container {
    position: relative;
    justify-content: center;
    width: calc(100% - 40px);
  }

  .card {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -75px;
    transition: transform 300ms;

    &:hover {
      transform: translate(-50%, -10px);
    }
  }

  .card:first-child {
    transform: translateX(-130%) rotate(-3deg);
    margin-left: 0;

    &:hover {
      transform: translate(-130%, -10px) rotate(-3deg);
    }
  }

  .card:last-child {
    transform: translateX(30%) rotate(3deg);
    margin-right: 0;

    &:hover {
      transform: translate(30%, -10px) rotate(3deg);
    }
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

      &:hover {
        transform: translateY(-10px);
      }
    }
    .container {
      display: flex;
    }
  }

  @media (max-width: 730px) {
    padding-top: 363px;
    margin-top: -380px;

    .container {
      flex-direction: column;
      align-items: center;
      padding: 0 20px;
    }

    .card {
      width: 100%;
    }

    .card:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;
