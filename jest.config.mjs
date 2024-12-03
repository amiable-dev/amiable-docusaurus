import {fileURLToPath} from 'url';

const config = {
  rootDir: fileURLToPath(new URL('.', import.meta.url)),
  verbose: true,
  testURL: 'http://localhost/',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '__fixtures__',
    'build',
    '.docusaurus',
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
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '__tests__'],
};

export default config;