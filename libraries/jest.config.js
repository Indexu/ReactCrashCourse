module.exports = {
  setupTestFrameworkScriptFile: './setupTestFramework.js',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!coverage/**',
    '!src/GlobalStyles.js',
    '!src/index.js',
  ],
};
