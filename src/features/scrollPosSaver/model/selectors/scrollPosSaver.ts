import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollPos = (state: StateSchema) => state.scrollPosSaver.scroll;
export const getScrollPosByPath = createSelector(
    getScrollPos,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
