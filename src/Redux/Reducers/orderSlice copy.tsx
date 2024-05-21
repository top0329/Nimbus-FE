import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

interface Order {
    id: string;
    instanceImage: string;
    instanceName: string;
    instanceDesc: string;
}

export interface OrdersState {
    orders: Order[];
}
export const initialState: OrdersState = {
    orders: [],
};
export interface RootState {
    orders: OrdersState;
}
const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<{ instanceImage: string; instanceName: string; instanceDesc: string }>) => {
            const { instanceImage, instanceName, instanceDesc } = action.payload;
            const newOrder: Order = {
                id: uuid(),
                instanceImage,
                instanceName,
                instanceDesc,
            };
            state.orders.push(newOrder);
        },
        updateOrder: (state, action: PayloadAction<{ id: string; instanceName: string; instanceDesc: string }>) => {
            const { id, instanceName, instanceDesc } = action.payload;
            const orderToUpdate = state.orders.find((order) => order.id === id);
            if (orderToUpdate) {
                orderToUpdate.instanceName = instanceName;
                orderToUpdate.instanceDesc = instanceDesc;
            }
        },
        deleteOrder: (state, action: PayloadAction<string>) => {
            state.orders.filter((order) => order.id !== action.payload);
        },
    },
});

export const { addOrder, updateOrder, deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer;