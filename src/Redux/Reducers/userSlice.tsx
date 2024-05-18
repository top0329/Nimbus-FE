import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface user {
    address: `0x${string}` | undefined;
    avatar: string;
    balance: number;
}

export const initialState: user = {
    address: '0x',
    avatar: '',
    balance: 0
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserInfo: (state, action: PayloadAction<{ address: `0x${string}` | undefined; avatar: string; balance: number }>) => {
            const { address, avatar, balance } = action.payload;
            return { ...state, address, avatar, balance };
        },
        updateUserInfo: (state, action: PayloadAction<{ avatar: string; balance: number }>) => {
            const { avatar, balance } = action.payload;
            return { ...state, avatar, balance };
        },
    },
});

export const { addUserInfo, updateUserInfo } = userSlice.actions;

export default userSlice.reducer;