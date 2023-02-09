export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';

export {
    ArticleView, ArticleSortFiled, ArticleType, ArticleBlockType,
} from './model/consts/articleConsts';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { ArticleList } from './ui/ArticleList/ArticleList';

export { getArticleDetailsData } from './model/selectors/articleDetails';

export { articleDetailsReducer } from './model/slices/articleDetailsSlice';
