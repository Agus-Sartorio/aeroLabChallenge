import styled from "styled-components";

export const StyledCatalog = styled.section`
  max-width: var(--max-width);
  margin: 200px auto 0;

  h2 {
    font-size: var(--ff-heading-200);
    font-weight: 900;
    margin-bottom: 42px;
    span {
      color: var(--blue-1);
    }
  }

  .container {
    display: flex;
    font-size: var(--ff-body-200);
    font-weight: 600;
    align-items: center;
    color: var(--grey-600);
  }

  .filter__container {
    margin-right: 40px;
    padding-right: 40px;
    border-right: 2px solid var(--grey-300);
  }

  .label__filter {
    margin-right: 16px;
  }

  .filter__select {
    padding: 16px 24px;
    border-radius: 16px;
    border: 1px solid #dae4f2;
    color: var(--grey-600);
    font-size: inherit;
  }

  .sort__container {
    display: flex;
    align-items: center;

    p {
      margin-right: 40px;
    }

    input {
      appearance: none;
    }
    label {
      background-color: var(--brand-light);
      padding: 8px 24px;
      border-radius: 12px;
      font-size: 18px;
      margin-right: 12px;
      cursor: pointer;
    }
    span {
      background-image: var(--brand-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
    input:checked {
      & + label {
        background-image: var(--brand-gradient);
        span {
          color: white;
          background: none;
        }
      }
    }
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 80px 24px;
    margin-top: 67px;
  }

  footer {
    margin-top: 64px;
    text-align: center;
    position: relative;
    padding: 20px 0;

    p {
      color: var(--grey-600);
    }
    .span {
      color: var(--blue-1);
      margin-right: 5px;
    }

    & > div:last-child {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
