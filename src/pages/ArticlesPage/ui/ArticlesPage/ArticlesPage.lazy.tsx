import { lazy } from 'react';

export const ArticlesPageLazy = lazy(() => new Promise((resolve) =>
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 1500)));
