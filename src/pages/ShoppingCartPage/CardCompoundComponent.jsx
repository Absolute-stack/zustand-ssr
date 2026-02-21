import { useShallow } from 'zustand/shallow';
import { useStore } from '../../store/Store.js';

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function CardTitle({ children }) {
  return <div className="card-title">{children}</div>;
}

function CardImage({ children, src, alt }) {
  return (
    <div className="card-image">
      <img src={src} alt={alt} decoding="async" loading="lazy" />
    </div>
  );
}

function CardButton({ children, item }) {
  const Products = useStore((state) => state.Products);
  const exist = Products.find((p) => p._id === item._id);
  return (
    <div className="btn-containers">
      {!exist ? (
        <AddProduct item={item} />
      ) : (
        <ChangeQuantityContainer item={exist} />
      )}
    </div>
  );
}

function AddProduct({ item }) {
  const addProduct = useStore((state) => state.addProduct);
  return (
    <button onClick={() => addProduct(item)} type="button" className="add-btn">
      Add to Cart
    </button>
  );
}

function ChangeQuantityContainer({ item }) {
  const { incQty, decQty, getTotalCartQuantity } = useStore(
    useShallow((state) => ({
      incQty: state.incQty,
      decQty: state.decQty,
      getTotalCartQuantity: state.getTotalCartQuantity,
    })),
  );
  return (
    <div className="change-container">
      <button
        onClick={() => incQty(item._id)}
        type="button"
        className="inc-btn"
      >
        ➕
      </button>
      <span className="">{item.quantity}</span>
      <button
        onClick={() => decQty(item._id)}
        type="button"
        className="dec-btn"
        disabled={item.quantity <= 0}
      >
        ➖
      </button>
    </div>
  );
}

Card.title = CardTitle;
Card.image = CardImage;
Card.button = CardButton;
export default Card;
