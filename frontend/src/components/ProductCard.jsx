
function ProductCard({ product, onAddToCart }) {
  if (!product) {
    return <p>Product data is missing.</p>;
  }

  return (
    <div className="product-card">
      <h2>{product.name}</h2>

      <p>
        Price: ₹{Number(product.price).toLocaleString("en-IN")}
      </p>

      <p>Category: {product.category}</p>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
