import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve('src', 'index.tsx'),
        build: path.resolve('build'),
        html: path.resolve('public', 'index.html'),
        src: path.resolve('src'),
        locales: path.resolve('public', 'locales'),
        buildLocales: path.resolve('build', 'locales'),
    };

    console.log('###########################');
    console.log('path.resolve(__dirname, src)', path.resolve('src'));
    console.log('path.resolve(__dirname, build)', path.resolve('build'));
    
    console.log('###########################');
    
    

    const mode = env?.mode || 'development';
    const PORT = env?.port || 3000;
    const apiUrl = env?.apiUrl || 'http://localhost:8000';

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });

    return config;
};
