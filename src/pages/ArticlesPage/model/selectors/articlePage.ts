import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortFiled, ArticleType, ArticleView } from '@/entities/Article';

export const getArticlesIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesError = (state: StateSchema) => state.articlesPage?.error || '';
export const getArticlesView = (state: StateSchema) => state.articlesPage?.view || ArticleView.GRID;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlesOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortFiled.CREATED;
export const getArticlesSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesType = (state: StateSchema) => state.articlesPage?.type || ArticleType.ALL;
