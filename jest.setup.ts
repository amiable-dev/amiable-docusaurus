import '@testing-library/jest-dom';
import {jest} from '@jest/globals';

// Mock window.matchMedia
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

// Mock Docusaurus context
Object.defineProperty(window, 'docusaurus', {
  value: {
    prefetch: jest.fn(),
    preload: jest.fn(),
  },
  configurable: true,
});