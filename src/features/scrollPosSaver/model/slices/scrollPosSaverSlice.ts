import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { scrollPosSaverSchema } from '../types/scrollPosSaverSchema';

const initialState: scrollPosSaverSchema = {
    scroll: {},
};

export const scrollPosSaverSlice = createSlice({
    name: 'scrollPosSaver',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollPosSaverActions } = scrollPosSaverSlice;
export const { reducer: scrollPosSaverReducer } = scrollPosSaverSlice;
