import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const removeReactAdditional = (path: string) => {
    const arr = path.split('/');
    const index = arr.indexOf('react-additional');
    arr.splice(index, 1);
    return arr.join('/')
} 

export function buildResolvers(options: BuildOptions): ResolveOptions {

  console.log('###########################');

  console.log('options.paths.src', options.paths.src);
  console.log('fallback', removeReactAdditional(options.paths.src));  

  console.log('###########################');

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': `/react-additional/${options.paths.src}`,
        },
    };
}
