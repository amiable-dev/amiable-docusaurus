import React from 'react';
import { render } from '@testing-library/react';
import BlogPostHeaderWrapper from '../index';
import type { WrapperProps } from '@docusaurus/types';

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
  } as WrapperProps<any>;

  it('renders both AIMetadata and original header', () => {
    const { getByTestId, getByText } = render(
      <BlogPostHeaderWrapper {...mockProps} />
    );
    
    expect(getByText('AI Generation Information')).toBeInTheDocument();
    expect(getByTestId('original-header')).toBeInTheDocument();
  });

  it('renders original header when no AI metadata', () => {
    const props = {
      metadata: {
        ai_generated: false,
      },
    } as WrapperProps<any>;

    const { getByTestId, queryByText } = render(
      <BlogPostHeaderWrapper {...props} />
    );

    expect(queryByText('AI Generation Information')).not.toBeInTheDocument();
    expect(getByTestId('original-header')).toBeInTheDocument();
  });

  it('handles missing metadata gracefully', () => {
    const props = {} as WrapperProps<any>;

    const { getByTestId, queryByText } = render(
      <BlogPostHeaderWrapper {...props} />
    );

    expect(queryByText('AI Generation Information')).not.toBeInTheDocument();
    expect(getByTestId('original-header')).toBeInTheDocument();
  });
});