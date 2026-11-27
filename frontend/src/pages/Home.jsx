
import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();

        setProducts(data);
      } catch (err) {
        setError("Unable to load products. Please try again.");
        console.error("Product API error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  function addToCart(product) {
    alert(product.name + " added to cart!");
  }

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

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))
      )}
    </main>
  );
}

export default Home;
