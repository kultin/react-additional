import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

const removeReactAdditional = (path: string) => {
    const arr = path.split('/')
    arr.splice(-2, 1)
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
        modules: [removeReactAdditional(options.paths.src), 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': removeReactAdditional(options.paths.src),
        },
    };
}
