import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<FC<LoginFormProps>>(() => new Promise((resolve) =>
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1500)));
