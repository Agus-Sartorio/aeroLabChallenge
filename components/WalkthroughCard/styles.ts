import styled from "styled-components";

export const StyledArticle = styled.article`
  width: min(40vw, 530px);
  border-radius: 32px;
  border: 1px solid var(--grey-300);
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  padding: 12px;
  background-color: var(--white);
  transition: box-shadow 300ms;

  &:hover {
    box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.15);
  }

  .top-img {
    height: 500px;
    background-image: var(--illustration-bg);
    border-radius: 24px 24px 0 0;
    border: 1px solid var(--grey-300);
    overflow: hidden;
  }

  .info {
    padding: 16px 24px 24px;
    border-radius: 0 0 24px 24px;
    border: 1px solid var(--grey-300);
    background-color: var(--white);

    h3 {
      background-image: var(--brand-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 900;
      font-size: var(--ff-heading-100);
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      margin-bottom: 12px;
    }

    .span-img {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      padding: 4px;
      background-color: var(--brand-light);
      margin-right: 14px;
    }

    p {
      font-weight: 600;
      font-size: var(--ff-body-200);
      line-height: 150%;
      color: var(--grey-600);
      max-width: 30ch;
    }
  }

  @media (max-width: 1024px) {
    background-color: rgba(255, 255, 255, 0.6);
    .top-img {
      flex: 1;
    }
  }

  @media (max-width: 375px) {
  }
`;
