import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin()
  ]
}
