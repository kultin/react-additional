import path from 'path';
import webpack from 'webpack';
import { removeReactAdditional } from './config/build/buildResolvers';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: removeReactAdditional(path.resolve(__dirname, 'src', 'index.tsx')),
        build: removeReactAdditional(path.resolve(__dirname, 'build')),
        html: removeReactAdditional(path.resolve(__dirname, 'public', 'index.html')),
        src: removeReactAdditional(path.resolve(__dirname, 'src')),
        locales: removeReactAdditional(path.resolve(__dirname, 'public', 'locales')),
        buildLocales:removeReactAdditional(path.resolve(__dirname, 'build', 'locales')),
    };    
    
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
