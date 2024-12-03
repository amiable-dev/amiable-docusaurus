import React from 'react';
import {render, screen} from '@testing-library/react';
import BlogPostHeaderWrapper from '../index';

// Mock the original header component
jest.mock('@theme-original/BlogPost/Header', () => {
  return function MockBlogPostHeader() {
    return <div data-testid="original-header">Original Header</div>;
  };
});

describe('BlogPostHeaderWrapper', () => {
  const mockProps = {
    metadata: {
      ai_generated: true,
      ai_models: [
        {
          name: 'Test Model',
          version: '1.0',
        },
      ],
    },
  };

  test('renders both AIMetadata and original header', () => {
    render(<BlogPostHeaderWrapper {...mockProps} />);
    expect(screen.getByText('AI Generation Information')).toBeInTheDocument();
    expect(screen.getByTestId('original-header')).toBeInTheDocument();
  });

  test('renders only original header when no AI metadata', () => {
    render(
      <BlogPostHeaderWrapper
        metadata={{
          ai_generated: false,
        }}
      />,
    );

    expect(screen.queryByText('AI Generation Information')).not.toBeInTheDocument();
    expect(screen.getByTestId('original-header')).toBeInTheDocument();
  });
});