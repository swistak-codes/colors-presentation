/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/

export default (config, env, helpers) => {
  config.plugins.push(
    new helpers.webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    })
  );
};
