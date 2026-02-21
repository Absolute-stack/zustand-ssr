import { useShallow } from 'zustand/shallow';
import { useStore } from '../../store/Store.js';

export default function Counter() {
  const { count, inc, dec } = useStore(
    useShallow((state) => ({
      count: state.count,
      inc: state.inc,
      dec: state.dec,
    })),
  );

  return (
    <div className="counter-page">
      <div className="counter-container">
        <button onClick={inc} type="button" className="inc-btn">
          ➕
        </button>
        <span>{count}</span>
        <button
          onClick={dec}
          type="button"
          className="dec-btn"
          disabled={count <= 0}
        >
          ➖
        </button>
      </div>
    </div>
  );
}
