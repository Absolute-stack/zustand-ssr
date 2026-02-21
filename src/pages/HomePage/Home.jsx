import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="homepage">
      <Link
        to="/counter"
        className="counter"
        onMouseEnter={() => import('../CounterPage/Counter.jsx')}
        onTouchStart={() => import('../CounterPage/Counter.jsx')}
      >
        Counter
      </Link>
      <Link
        to="/shopping-cart"
        className="shopping-cart"
        onMouseEnter={() => import('../ShoppingCartPage/Cart.jsx')}
        onTouchStart={() => import('../ShoppingCartPage/Cart.jsx')}
      >
        Shopping Cart
      </Link>
    </div>
  );
}
