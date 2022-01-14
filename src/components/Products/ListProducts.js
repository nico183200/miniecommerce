import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { getAllProducts } from "../../app/services/productsService";
import { Product } from "./Product";

export const ListProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
      .then(data => setProducts(data))
  },[])

  return (
    <Row xs={3}>
      {products.length < 0 ? (
        <div>
          <p>Cargando productos... </p>
        </div>
      ) : (
        products.map((product, index) => <Product key={index} item={product} />)
      )}
    </Row>
  );
};
