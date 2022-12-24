import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
