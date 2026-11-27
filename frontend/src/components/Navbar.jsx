
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Navbar() {
  const { totalCount } = useCart();

  return (
    <nav>
      <h2>BizFlow</h2>

      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/login">Login</Link>{" "}
        <Link to="/register">Register</Link>{" "}
        <Link to="/cart">
          Cart ({totalCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
