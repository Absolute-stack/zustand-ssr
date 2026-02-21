export const createCartSlice = (set, get) => ({
  Products: [],
  addProduct: (product) =>
    set((state) => {
      const item = state.Products.find((p) => p._id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.Products.push({ ...product, quantity: 1 });
      }
    }),
  incQty: (id) =>
    set((state) => {
      const product = state.Products.find((p) => p._id === id);
      if (product) {
        product.quantity += 1;
      }
    }),
  decQty: (id) =>
    set((state) => {
      const product = state.Products.find((p) => p._id === id);
      if (product) {
        product.quantity -= 1;
        if (product.quantity <= 0) {
          state.Products = state.Products.filter((p) => p._id !== id);
        }
      }
    }),
  removeProduct: (id) =>
    set((state) => {
      const product = state.Products.find((p) => p._id === id);
      if (product) {
        state.Products = state.Products.filter((p) => p._id === id);
      }
    }),
  clearCart: () =>
    set((state) => {
      state.Products = [];
    }),
  getTotalCartPrice: () => {
    const Products = get().Products;
    return Products.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },
  getTotalCartQuantity: () => {
    const Products = get().Products;
    return Products.reduce((total, item) => total + item.quantity, 0);
  },
});
