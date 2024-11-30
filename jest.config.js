/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.docusaurus/', '/build/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@docusaurus/core/babel'] }],
  },
  moduleNameMapper: {
    '^@/components/ui/(.*)$': '<rootDir>/src/components/ui/$1',
    '^@theme-original/(.*)$': '<rootDir>/node_modules/@docusaurus/theme-classic/lib/theme/$1',
    '^@site/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'src/theme/**/*.{js,jsx,ts,tsx}',
    '!src/theme/**/*.d.ts',
    '!src/theme/**/types.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};