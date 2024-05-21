import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './Reducers/orderSlice';
import userSlice from './Reducers/userSlice';
import specificationSlice from './Reducers/specificationSlice';
import locationSlice from './Reducers/locationSlice';

export default configureStore({
    reducer: {
        orders: orderSlice,
        user: userSlice,
        specs: specificationSlice,
        locations: locationSlice
    },
});
