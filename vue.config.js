const HardSourcePlugin = require('hard-source-webpack-plugin');

module.exports = {
  configureWebpack: webpackConfig => {
    webpackConfig.devtool = 'hidden-source-map';

    webpackConfig.plugins.push(
      new HardSourcePlugin({
        environmentHash: {
          root: process.cwd(),
          directories: [],
          files: ['package-lock.json', '.env', '.env.local', '.env.production', '.env.staging', '.env.test'],
        },
      }),
      new HardSourcePlugin.ExcludeModulePlugin([{ test: /eslint-loader/ }]) // Don't cache eslint-loader results
    );
  },
  pluginOptions: {
    // See https://www.npmjs.com/package/vue-cli-plugin-s3-deploy#options
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      overrideEndpoint: false,
      region: 'us-east-1',
      bucket: 'carousels-test',
      createBucket: false,
      staticHosting: false,
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'private',
      pwa: true,
      pwaFiles: 'index.html,manifest.json',
      enableCloudfront: true,
      cloudfrontId: process.env.CLOUDFRONT_ID,
      cloudfrontMatchers: process.env.CLOUDFRONT_MATCHERS,
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5,
    },
  }
}
