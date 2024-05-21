import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: any = [];

const locationSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        addLocations: (state, action: PayloadAction<any>) => {
            state = action.payload;
            return state;
        }
    },
});

export const { addLocations } = locationSlice.actions;
export default locationSlice.reducer;