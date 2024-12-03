# Testing Guidelines for Docusaurus Components

## Setup

1. Configuration Files:
   - `jest.config.mjs` - Main Jest configuration
   - `jest.setup.ts` - Test environment setup

2. Required Dependencies:
```json
{
  "devDependencies": {
    "@swc/core": "^1.3.0",
    "@swc/jest": "^0.2.29",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "jest": "^29.5.0",
    "snapshot-serializer-beautifier": "^1.0.0"
  }
}
```

## Test File Organization

1. Test files should be placed in `__tests__` directories next to the components they test
2. Use `.test.tsx` extension for TypeScript React tests
3. Follow the pattern: `component-name.test.tsx`

## Best Practices

1. Use React Testing Library:
```typescript
import {render, screen} from '@testing-library/react';
```

2. Mock External Dependencies:
```typescript
jest.mock('@theme-original/component', () => ({
  default: () => <div>Mocked Component</div>,
}));
```

3. Use Snapshots When Appropriate:
```typescript
expect(container).toMatchSnapshot();
```

4. Test Component Variants:
- Default behavior
- Edge cases
- Error states
- Loading states

5. Mock Console Errors:
```typescript
const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
// ... test ...
consoleError.mockRestore();
```

## Common Patterns

1. Testing Optional Props:
```typescript
test('handles missing optional props', () => {
  render(<Component required={value} />);
  // ... assertions ...
});
```

2. Testing Error States:
```typescript
test('handles error state', () => {
  render(<Component error={new Error('Test error')} />);
  expect(screen.getByText('Error message')).toBeInTheDocument();
});
```

3. Testing Loading States:
```typescript
test('shows loading state', () => {
  render(<Component loading={true} />);
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
```

## Coverage Requirements

- Minimum 80% coverage required
- Run coverage report: `npm run test:ci`
- Check specific areas: `npm run test:ci -- --coverage --verbose`

## Debugging Tests

1. Use Debug Mode:
```bash
npm run test:debug
```

2. Console Output:
```typescript
screen.debug();
```

3. Test Specific File:
```bash
npm test -- path/to/test.tsx
```

## Resources

- [Docusaurus Testing Examples](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/__tests__)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)