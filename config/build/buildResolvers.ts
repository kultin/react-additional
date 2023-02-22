import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {

  console.log('###########################');
  console.log('options.paths.src', options.paths.src);
  console.log('fallback', options.paths.src.split('/').slice(1).join('/'));  
  console.log('###########################');

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': options.paths.src,
        },
        fallback: {
            '@': options.paths.src.split('/').slice(1).join('/'),
        }
    };
}
