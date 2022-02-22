import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  max-width: var(--max-width);
  margin: 0 auto;
  background-image: url("/assets/illustrations/single-wave-pattern.svg");
  /*  align-items: center; */
  justify-content: space-between;
  overflow-y: hidden;

  h1 {
    line-height: 0.8;
  }
  .texto1 {
    font-weight: 600;
    font-size: var(--ff-body-200);
    color: var(--grey-600);
    letter-spacing: 3px;
    display: block;
    margin-bottom: 8px;
  }
  .texto2 {
    background-image: var(--brand-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: block;
    font-size: var(--ff-heading-300);
    font-weight: 900;
  }
  .texto3 {
    font-size: var(--ff-heading-300);
    font-weight: 900;
    color: var(--grey-900);
  }

  p {
    font-weight: 600;
    color: var(--grey-600);
    line-height: 150%;
    font-size: var(--ff-body-200);
    margin-top: 24px;
    max-width: 60ch;
  }

  a {
    padding: 27px 40px;
    border-radius: 24px;
    background-image: var(--brand-gradient);
    color: var(--white);
    font-weight: 600;
    font-size: var(--ff-body-200);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 64px;
    cursor: pointer;
    text-decoration: none;

    span {
      margin-right: 12.5px;
    }
  }

  .hero-img {
    margin-top: -85px;
    width: 100%;
    background-image: url("assets/illustrations/Hero-bg.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center 10px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    & > div:first-child {
      text-align: center;
    }

    .texto1 {
      font-size: 16px;
    }

    .texto2,
    .texto3 {
      font-size: 96px;
    }

    p {
      font-size: 16px;
      max-width: 290px;
      margin: 24px auto 0;
    }

    a {
      margin-top: 40px;
      padding: 20px 48px;
      font-size: 16px;
    }

    .hero-img {
      height: 520px;
      margin-top: 50px;
      background-image: url("assets/illustrations/hero-responsive.png");
    }
  }
`;
