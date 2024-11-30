import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tooltip } from '@/components/ui/tooltip';
import type { AIMetadataDisplayProps } from './types';

/**
 * AIMetadata Component
 * Displays AI-related metadata in the blog post header
 */
export default function AIMetadata({ metadata }: AIMetadataDisplayProps): JSX.Element | null {
  if (!metadata?.ai_generated) {
    return null;
  }

  const renderTooltip = (content: string, explanation: string) => (
    <Tooltip content={explanation}>
      <span className="cursor-help border-b border-dotted border-slate-400">
        {content}
      </span>
    </Tooltip>
  );

  return (
    <Card className="mb-4 bg-slate-50 dark:bg-slate-900">
      <CardHeader className="pb-2">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          🤖 AI Generation Information
        </h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {metadata.ai_models && (
            <div>
              <strong className="font-medium">
                {renderTooltip(
                  "AI Models Used",
                  "AI models that contributed to this content"
                )}:
              </strong>
              <ul className="list-disc pl-4 mt-1">
                {metadata.ai_models.map((model, index) => (
                  <li key={index}>
                    {model.name} (v{model.version})
                    {model.tasks && (
                      <span className="text-slate-600 dark:text-slate-400">
                        {' '}
                        - {model.tasks.join(', ')}
                      </span>
                    )}
                    {model.confidence_score && (
                      <span className="ml-2">
                        {renderTooltip(
                          `(${(model.confidence_score * 100).toFixed(1)}% confidence)`,
                          "Model's self-reported confidence in its output"
                        )}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {metadata.ai_quality_metrics && (
            <div className="mt-2">
              <strong className="font-medium">
                {renderTooltip(
                  "Quality Metrics",
                  "Automated assessment of content quality"
                )}:
              </strong>
              <ul className="list-disc pl-4 mt-1">
                {Object.entries(metadata.ai_quality_metrics).map(([key, value]) => (
                  <li key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {(value * 100).toFixed(1)}%
                  </li>
                ))}
              </ul>
            </div>
          )}

          {metadata.ai_tools && (
            <div className="mt-2">
              <strong className="font-medium">
                {renderTooltip(
                  "Tools Used",
                  "AI-powered tools used in content creation"
                )}:
              </strong>
              <ul className="list-disc pl-4 mt-1">
                {metadata.ai_tools.map((tool, index) => (
                  <li key={index}>
                    {tool.name} (v{tool.version})
                  </li>
                ))}
              </ul>
            </div>
          )}

          {metadata.ai_review_process && (
            <div className="mt-2">
              <strong className="font-medium">
                {renderTooltip(
                  "Review Process",
                  "How this content was verified for accuracy"
                )}:
              </strong>
              <p className="mt-1">{metadata.ai_review_process}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}