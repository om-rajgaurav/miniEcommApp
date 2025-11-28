import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '../../types/types';

interface CartState {
    items: CartItem[];
    totalAmount: number;
    totalItems: number;
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
    totalItems: 0,
};

const calculateTotals = (items: CartItem[]) => {
    const totalAmount = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    return { totalAmount, totalItems };
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(
                item => item.product.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    product: action.payload,
                    quantity: 1,
                });
            }

            const totals = calculateTotals(state.items);
            state.totalAmount = totals.totalAmount;
            state.totalItems = totals.totalItems;
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                item => item.product.id !== action.payload
            );

            const totals = calculateTotals(state.items);
            state.totalAmount = totals.totalAmount;
            state.totalItems = totals.totalItems;
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(
                item => item.product.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }

            const totals = calculateTotals(state.items);
            state.totalAmount = totals.totalAmount;
            state.totalItems = totals.totalItems;
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(
                item => item.product.id === action.payload
            );

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    // Remove item if quantity becomes 0
                    state.items = state.items.filter(
                        item => item.product.id !== action.payload
                    );
                }
            }

            const totals = calculateTotals(state.items);
            state.totalAmount = totals.totalAmount;
            state.totalItems = totals.totalItems;
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalItems = 0;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
