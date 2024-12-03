/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  testMatch: ['**/__tests__/**/*.ts', '**/__tests__/**/*.tsx'],
  transform: {
    '^.+\\.[jt]sx?$': '@docusaurus/core/lib/jest/babelTransform.js',
  },
  moduleNameMapper: {
    '^@site/(.*)$': '<rootDir>/$1',
    '^@docusaurus/(.*)': ['@docusaurus/$1', '<rootDir>/node_modules/@docusaurus/$1'],
    '^@theme/(.*)$': ['@theme/$1', '@docusaurus/theme-classic/lib/theme/$1'],
  },
  snapshotSerializers: [
    require.resolve('snapshot-serializer-beautifier'),
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.docusaurus/', '/build/'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@docusaurus/|@site/|remark-|rehype-|parse5|unified|bail|trough|vfile|unist|hast|property-information|html-void-elements|ccount|nlcst|linguist))'
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '__tests__'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
};