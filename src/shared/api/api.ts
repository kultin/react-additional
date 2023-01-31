import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';
    }

    return config;
});
