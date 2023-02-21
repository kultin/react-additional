import { ResolveOptions } from 'webpack';
import path from 'path';
import { BuildOptions } from './types/config';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


export function buildResolvers(options: BuildOptions): ResolveOptions {
  
  console.log('#####################');
  console.log('!!!!', path.resolve(__dirname));
  console.log('!!!!', path.resolve(__dirname, 'src'),);
  console.log('#####################');
  
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    };
}
