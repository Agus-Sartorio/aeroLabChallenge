import styled from "styled-components";

export const StyledProduct = styled.article`
  width: 348px;
  height: 506px;
  font-size: 18px;
  font-weight: 600;

  .product__top {
    border: 1px solid var(--grey-300);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    overflow: hidden;
  }

  .product__img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 348px;
  }

  .product__info {
    padding: 16px 24px;
    border-top: 1px solid var(--grey-300);
  }

  .product__name {
    color: var(--grey-900);
  }

  .product__category {
    font-size: 14px;
    color: var(--grey-600);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 3px;
  }

  @media (max-width: 1024px) {
    width: 311px;
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 16px;
  width: 100%;
  border: none;
  background-image: var(--brand-gradient);
  color: white;
  margin-top: 16px;
  font: inherit;
  cursor: pointer;
  transition: transform 300ms;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    outline: none;
  }

  span:first-child {
    margin-right: 12px;
  }

  span:last-child {
    margin-left: 12px;
  }

  &:disabled {
    background-image: none;
    background-color: var(--grey-200);
    color: var(--grey-600);
    pointer-events: none;
  }

  &.processing {
    background-image: var(--illustration-bg);
    color: var(--white);
    pointer-events: none;
  }
`;
