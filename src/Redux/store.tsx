import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './Reducers/orderSlice';
import userSlice from './Reducers/userSlice';
import locationSlice from './Reducers/locationSlice';

export default configureStore({
    reducer: {
        orders: orderSlice,
        user: userSlice,
        locations: locationSlice
    },
});
