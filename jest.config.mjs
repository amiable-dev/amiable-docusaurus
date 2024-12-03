import {fileURLToPath} from 'url';

const config = {
  rootDir: fileURLToPath(new URL('.', import.meta.url)),
  verbose: true,
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.docusaurus/',
    '/build/',
  ],
  transform: {
    '^.+\\.[jt]sx?$': [
      '@swc/jest',
      {
        jsc: {
          target: 'es2020',
        },
      },
    ],
  },
  moduleNameMapper: {
    '^@theme/(.*)$': '@docusaurus/theme-classic/lib/theme/$1',
    '^@docusaurus/(.*)$': '@docusaurus/$1',
    '^@site/(.*)$': '<rootDir>/$1',
  },
  transformIgnorePatterns: ['/node_modules/(?!(eta|@docusaurus)/)'],
  fakeTimers: {
    enableGlobally: true,
  },
  snapshotSerializers: ['jest-serializer-html'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '__tests__',
  ],
};

export default config;