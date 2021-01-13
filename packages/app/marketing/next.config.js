const { dependencies } = require('./package.json');

/**
 * NextJS applications won’t automatically transpile code from node_modules dependencies.
 * That’s why we need to add the next-transpile-modules plugin.
 */
const withTM = require('next-transpile-modules')(
  Object.keys(dependencies || []).filter(dependency => dependency.startsWith('@app/'))
);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(
  withTM({
    trailingSlash: process.env.NODE_ENV === 'production',
    env: {
      NEXT_PUBLIC_BUILD_REVISION: process.env.BUILD_REVISION || 'DEVELOP'
    }
  })
);
