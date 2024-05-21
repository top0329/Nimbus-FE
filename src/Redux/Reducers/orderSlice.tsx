import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: any = [];

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<{ instanceImage: string; instanceName: string; instanceDesc: string }>) => {
            state = action.payload;
            return state;
        }
    },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;