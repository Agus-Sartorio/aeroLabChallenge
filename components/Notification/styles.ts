import styled from "styled-components";

export const StyledNotification = styled.div`
  display: flex;
  padding: 24px;
  align-items: center;
  width: 100%;
  max-width: 532px;
  border-radius: 12px;
  border: 3px solid;
  margin-top: 12px;
  background-color: white;
  pointer-events: all;

  p {
    margin-left: 15px;
    font-size: 18px;
    font-weight: 600;
    color: var(--grey-600);

    span {
      color: var(--grey-900);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    border: none;
    background-color: transparent;
    padding: 5px;
    border-radius: 50%;
    transition: background-color 300ms;
    cursor: pointer;

    &:hover {
      background-color: var(--grey-300);
    }
  }

  &.success {
    border-color: var(--green);
  }

  &.error {
    border-color: var(--red);
  }

  @media (max-width: 375px) {
    align-items: flex-start;
  }
`;
