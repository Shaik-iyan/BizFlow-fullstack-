import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";
import { useCart } from "../hooks/useCart";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();


  
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <main><h2>Loading products...</h2></main>;
  }

  if (error) {
    return <main><p>{error}</p></main>;
  }

  return (
    <main>
      <h1>Welcome to BizFlow</h1>
      <h2>Our Products</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </main>
  );
}

export default Home;

