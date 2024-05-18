import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './Reducers/orderSlice';
import userSlice from './Reducers/userSlice';

export default configureStore({
    reducer: {
        orders: orderSlice,
        user: userSlice
    },
});
