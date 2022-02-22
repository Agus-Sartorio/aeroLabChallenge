import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid var(--grey-300);
  margin-left: auto;

  p {
    margin: 0 24px;
    color: var(--grey-600);

    span {
      background-image: var(--brand-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  button {
    background-color: var(--brand-light);
    padding: 8px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 200ms;

    &:first-child {
      transform: rotate(90deg);
    }
    &:last-child {
      transform: rotate(-90deg);
    }

    &:disabled {
      background-color: var(--grey-200);
      pointer-events: none;

      img {
        opacity: 0.3;
      }
    }

    &:hover,
    &:active {
      background-color: var(--brand-light-2);
    }
  }
`;
