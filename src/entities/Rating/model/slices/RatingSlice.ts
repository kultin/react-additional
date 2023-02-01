import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RatingSchema } from '../types/RatingSchema';

const initialState: RatingSchema = {
    
};

export const RatingSlice = createSlice({
    name: 'Rating',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: RatingActions } = RatingSlice;
export const { reducer: RatingReducer } = RatingSlice;