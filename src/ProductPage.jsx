import { ProductIndex } from "./ProductIndex";
import { useState, useEffect } from 'react'
import { ProductNew } from "./ProductNew";
import axios from "axios";

export function ProductPage() {
const [products, setProducts] = useState([]);
  
const handleIndex = () => {
    axios.get("http://localhost:3000/products")
      .then((response) => {
        console.log(response.data);
        setProducts (response.data);
      })
  }

  useEffect(handleIndex, [])

  return (
    <main>
      <ProductNew />
      <ProductIndex products={products} />
    </main>
  );
}
