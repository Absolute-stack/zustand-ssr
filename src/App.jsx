import './App.css';
import { lazy, Suspense } from 'react';
import Home from './pages/HomePage/Home.jsx';
import { Route, Routes } from 'react-router-dom';

const Counter = lazy(() => import('./pages/CounterPage/Counter.jsx'));
const Cart = lazy(() => import('./pages/ShoppingCartPage/Cart.jsx'));

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/counter"
          element={
            <Suspense fallback={null}>
              <Counter />
            </Suspense>
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <Suspense fallback={null}>
              <Cart />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}
