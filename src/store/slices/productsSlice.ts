import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/types';

interface ProductsState {
    items: Product[];
    loading: boolean;
    error: string | null;
    searchQuery: string;
}

const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
    searchQuery: '',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.items = action.payload;
            state.error = null;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    },
});

export const {
    setLoading,
    setProducts,
    setError,
    setSearchQuery,
} = productsSlice.actions;

export default productsSlice.reducer;
