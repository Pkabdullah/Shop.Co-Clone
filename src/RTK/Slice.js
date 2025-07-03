import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProduct: null,
  cartItems: [],
};

const productSlice = createSlice({
  name: 'product',

  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === productId
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== productId
          );
        }
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === productId
      );
      if (existingProduct) {
        existingProduct.quantity = Math.max(quantity, 1);
      }
    },
    setCart: (state, action) => {
      state.cartItems = action.payload;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct,addToCart,updateQuantity,removeFromCart,setCart,clearCart,openCart,closeCart } = productSlice.actions;
export default productSlice.reducer;