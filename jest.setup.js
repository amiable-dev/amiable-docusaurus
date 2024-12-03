const util = require('util');

// Debugging utilities
global.DD = (...args) => {
  console.log(util.inspect(args, false, null, true));
};

require('@testing-library/jest-dom');

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock object required by theme
Object.defineProperty(window, 'docusaurus', {
  value: {
    prefetch: jest.fn(),
    preload: jest.fn(),
  },
  configurable: true,
});