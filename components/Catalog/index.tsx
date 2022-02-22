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

const amountPerPage = 16;

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mostRecentProduct, setMostRecentProduct] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState(false);
  const categorias = Array.from(new Set(products.map((p) => p.category)));

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
  console.log(mostRecentProduct);

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
    <StyledCatalog>
      <h2>
        <span>TECH</span> PRODUCTS
      </h2>
      <div className="container">
        <div className="filter__container">
          <label className="label__filter" htmlFor="filter">
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
          <p>Sort by:</p>
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
        <Pagination
          productAmount={filtered ? filteredProducts.length : products.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
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
        />
      </footer>
    </StyledCatalog>
  );
}
