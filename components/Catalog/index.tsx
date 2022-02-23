import { ChangeEvent, useEffect, useState } from "react";
import Pagination from "../Pagination";
import Product from "../Product";
import { StyledCatalog } from "./styles";

export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
}

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mostRecentProduct, setMostRecentProduct] = useState<Product[]>([]);
  const [amountPerPage, setAmountPerPage] = useState(16);
  const [filtered, setFiltered] = useState(false);
  const categorias = Array.from(new Set(products.map((p) => p.category)));

  const resizeFunction = () => {
    if (window.innerWidth <= 375) {
      setAmountPerPage(8);
    } else if (window.innerWidth <= 1024) {
      setAmountPerPage(12);
    } else {
      setAmountPerPage(16);
    }
  };

  console.log(amountPerPage);

  useEffect(() => {
    setFilteredProducts(() => products.slice(0, amountPerPage));
  }, [amountPerPage]);

  useEffect(() => {
    window.addEventListener("resize", resizeFunction);
    return () => {
      window.removeEventListener("resize", resizeFunction);
    };
  }, []);

  useEffect(() => {
    fetch("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUxZjFlMDg2MWIwMjAwMjE0OWI0MjAiLCJpYXQiOjE2NDIxOTc0NzJ9.-N5DaOY-SA0yn3E0s7sU0SLDnij9gMkA7tauTxH6M4M",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setMostRecentProduct(response);
        setProducts(response);
        resizeFunction();
        setFilteredProducts(response.slice(0, amountPerPage));
      });
  }, []);

  const displayProducts = () => {
    if (currentPage === 1) {
      setFilteredProducts(() => products.slice(0, amountPerPage));
    } else {
      setFilteredProducts(() =>
        products.slice(
          amountPerPage * (currentPage - 1),
          amountPerPage * currentPage
        )
      );
    }
  };

  useEffect(() => displayProducts(), [currentPage]);

  const handleSort = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Most Recent") {
      setCurrentPage(1);
      setProducts(mostRecentProduct);
      setFilteredProducts(mostRecentProduct.slice(0, amountPerPage));
      return;
    }
    setCurrentPage(1);
    let productsCopy = [...products];
    setProducts(
      productsCopy.sort((a, b) => {
        const costA = a.cost;
        const costB = b.cost;
        return e.target.value === "Lowest Price"
          ? costA - costB
          : costB - costA;
      })
    );
    setFilteredProducts(productsCopy.slice(0, amountPerPage));
  };

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "all") {
      setFilteredProducts(products.slice(0, amountPerPage));
      setFiltered(false);
      setCurrentPage(1);
      return;
    }
    setFilteredProducts(products.filter((p) => p.category === e.target.value));
    setFiltered(true);
    setCurrentPage(1);
  };

  return (
    <StyledCatalog id="catalog">
      <h2>
        <span>TECH</span> PRODUCTS
      </h2>
      <div className="container">
        <div className="flex__container">
          <div className="filter__container">
            <label
              className={`label__filter ${
                amountPerPage !== 16 ? "sr_only" : ""
              }`}
              htmlFor="filter"
            >
              Filter By
            </label>
            <select
              onChange={handleFilter}
              className="filter__select"
              id="filter"
            >
              <option value="all">All Products</option>
              {categorias.map((c) => {
                return (
                  <option key={c} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="sort__container">
            <p className={amountPerPage !== 16 ? "sr_only" : ""}>Sort by:</p>
            <input
              type="radio"
              name="points"
              id="value1"
              value="Most Recent"
              onChange={handleSort}
            />
            <label htmlFor="value1">
              <span>Most Recent</span>
            </label>
            <input
              type="radio"
              name="points"
              id="value2"
              value="Lowest Price"
              onChange={handleSort}
            />
            <label htmlFor="value2">
              <span>Lowest Price</span>
            </label>
            <input
              type="radio"
              name="points"
              id="value3"
              value="Highest Price"
              onChange={handleSort}
            />
            <label htmlFor="value3">
              <span>Highest Price</span>
            </label>
          </div>
        </div>
        {amountPerPage !== 8 && (
          <Pagination
            productAmount={filtered ? filteredProducts.length : products.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            amountPerPage={amountPerPage}
          />
        )}
      </div>
      <div className="products">
        {filteredProducts.map((p) => (
          <Product product={p} key={p._id} />
        ))}
      </div>
      <footer>
        <p>
          <span className="span">
            {filteredProducts.length} of {products.length}
          </span>
          products
        </p>
        <Pagination
          productAmount={filtered ? filteredProducts.length : products.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          amountPerPage={amountPerPage}
        />
      </footer>
    </StyledCatalog>
  );
}
