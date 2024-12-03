import React from 'react';
import {render, screen} from '@testing-library/react';
import {jest} from '@jest/globals';
import AIMetadata from '../index';
import type {AIMetadata as AIMetadataType} from '../types';

describe('AIMetadata', () => {
  const mockMetadata: AIMetadataType = {
    ai_generated: true,
    ai_models: [
      {
        name: 'Test Model',
        version: '1.0',
        tasks: ['content'],
        confidence_score: 0.95,
      },
    ],
    ai_tools: [
      {
        name: 'Test Tool',
        version: '1.0',
      },
    ],
    ai_review_process: 'Human reviewed',
    ai_quality_metrics: {
      accuracy: 0.9,
      coherence: 0.8,
      technical_depth: 0.7,
    },
  };

  test('renders nothing when ai_generated is false', () => {
    render(<AIMetadata metadata={{ai_generated: false}} />);
    expect(screen.queryByText('AI Generation Information')).not.toBeInTheDocument();
  });

  test('renders full metadata correctly', () => {
    const { container } = render(<AIMetadata metadata={mockMetadata} />);
    expect(screen.getByText('AI Generation Information')).toBeInTheDocument();
    expect(screen.getByText(/Test Model/)).toBeInTheDocument();
    expect(screen.getByText(/Test Tool/)).toBeInTheDocument();
    expect(screen.getByText('Human reviewed')).toBeInTheDocument();
    expect(screen.getByText(/90%/)).toBeInTheDocument();
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });

  test('handles missing optional fields', () => {
    const partialMetadata: AIMetadataType = {
      ai_generated: true,
      ai_models: [
        {
          name: 'Test Model',
          version: '1.0',
        },
      ],
    };
    
    render(<AIMetadata metadata={partialMetadata} />);
    expect(screen.getByText(/Test Model/)).toBeInTheDocument();
    expect(screen.queryByText('Quality Metrics')).not.toBeInTheDocument();
  });

  test('renders confidence scores correctly', () => {
    render(<AIMetadata metadata={mockMetadata} />);
    expect(screen.getByText(/95% confidence/)).toBeInTheDocument();
  });

  test('handles invalid metadata gracefully', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    const invalidMetadata = {
      ai_generated: true,
      ai_models: 'invalid',
    } as any;

    render(<AIMetadata metadata={invalidMetadata} />);
    expect(screen.getByText('Invalid Metadata')).toBeInTheDocument();
    expect(consoleError).toHaveBeenCalled();

    consoleError.mockRestore();
  });
});