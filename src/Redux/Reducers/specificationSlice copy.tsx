import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: any = [];

const specificationSlice = createSlice({
    name: 'specs',
    initialState,
    reducers: {
        addSpecs: (state, action: PayloadAction<any>) => {
            state = action.payload;
            return state;
        }
    },
});

export const { addSpecs } = specificationSlice.actions;
export default specificationSlice.reducer;