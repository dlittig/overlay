module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: "node-loader"
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@marshallofsound/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules"
      }
    }
  },
  {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                chrome: "70"
              }
            }
          ],
          "@babel/preset-react"
        ],
        plugins: [
          "@babel/plugin-proposal-async-generator-functions",
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-object-rest-spread"
        ]
      }
    }
  },
  { test: /\.(png|woff|woff2|eot|ttf|svg|ico)$/, loader: "file-loader" }
  
  // Put your webpack loader rules in this array.  This is where you would put
  // your ts-loader configuration for instance:
  /**
   * Typescript Example:
   *
   * {
   *   test: /\.tsx?$/,
   *   exclude: /(node_modules|.webpack)/,
   *   loaders: [{
   *     loader: 'ts-loader',
   *     options: {
   *       transpileOnly: true
   *     }
   *   }]
   * }
   */
];
