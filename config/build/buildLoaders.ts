import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssloader ={
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  return [
    typeScriptLoader,
    cssloader
  ]
}
