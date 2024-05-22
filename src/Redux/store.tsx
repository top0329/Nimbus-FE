import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './Reducers/orderSlice';
import userSlice from './Reducers/userSlice';
import locationSlice from './Reducers/locationSlice';
import specificationSlice from './Reducers/specificationSlice';

export default configureStore({
    reducer: {
        orders: orderSlice,
        user: userSlice,
        locations: locationSlice,
        specs: specificationSlice
    },
});
