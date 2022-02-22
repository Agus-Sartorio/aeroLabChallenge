import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Product } from "../Catalog";
import { StyledPagination } from "./styles";

interface Props {
  productAmount: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  productAmount,
  currentPage,
  setCurrentPage,
}: Props) {
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const totalPages = Math.ceil(productAmount / 16);

  /*   const displayProducts = () => {
    const amountPerPage = 16;
    if (currentPage === 1) {
      setFilteredProducts((filteredProducts) =>
        filteredProducts.slice(0, amountPerPage - 1)
      );
    } else {
      setFilteredProducts((filteredProducts) =>
        filteredProducts.slice(
          amountPerPage * (currentPage - 1),
          amountPerPage * currentPage
        )
      );
    }
  }; */

  return (
    <StyledPagination>
      <button
        onClick={previousPage}
        disabled={currentPage === 1}
        aria-label="pagina anterior"
      >
        <Image
          className="chevron"
          src="/assets/icons/chevron-down.svg"
          width="15"
          height="8"
          alt=""
        />
      </button>
      <p>
        Page{" "}
        <span>
          {currentPage} of {totalPages || "1"}
        </span>
      </p>
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        aria-label="pagina siguiente"
      >
        <Image
          className="chevron"
          src="/assets/icons/chevron-down.svg"
          width="15"
          height="8"
          alt=""
        />
      </button>
    </StyledPagination>
  );
}
