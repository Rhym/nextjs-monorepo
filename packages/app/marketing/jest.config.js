const baseConfig = require('../../../jest.config');
const packageName = require('./package.json').name.split('@app/').pop();

module.exports = {
  ...baseConfig,
  name: packageName,
  displayName: packageName,
  setupFilesAfterEnv: [
    '<rootDir>/../../../setup-tests.ts'
  ],
};
