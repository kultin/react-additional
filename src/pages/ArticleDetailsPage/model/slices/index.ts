import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articledetailsCommentsReducer } from './articleDetailsCommentSlice';
import { articleDetailsRecommendsReducer } from './articleDetailsRecommendsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommends: articleDetailsRecommendsReducer,
    comments: articledetailsCommentsReducer,
});
