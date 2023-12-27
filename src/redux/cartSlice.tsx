import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from '../utils/cart';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as ICart[],
    },
    reducers: {
        addToCart: (state, action: PayloadAction<ICart>) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const updatedCart = state.cart.filter((item) => item.id !== action.payload);
            state.cart = updatedCart;
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;
