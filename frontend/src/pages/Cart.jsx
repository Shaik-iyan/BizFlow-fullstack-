
import { useCart } from "../hooks/useCart";

function Cart() {
  const {
    cart,
    removeFromCart,
    totalCount,
    totalPrice,
  } = useCart();

  return (
    <main>
      <h1>Shopping Cart</h1>

      <p>Total Items: {totalCount}</p>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="product-card">
              <h3>{item.name}</h3>

              <p>
                Price: ₹{item.price.toLocaleString("en-IN")}
              </p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Subtotal: ₹
                {(item.price * item.quantity).toLocaleString("en-IN")}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h2>
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </h2>
        </>
      )}
    </main>
  );
}

export default Cart;
