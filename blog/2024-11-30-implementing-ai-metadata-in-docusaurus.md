---
title: Implementing AI Metadata in Docusaurus
authors: [amiable-dev]
tags: [docusaurus, ai, metadata, implementation]
description: A comprehensive guide to implementing AI metadata tracking in Docusaurus blogs
image: https://i.imgur.com/mErPwqL.png
ai_generated: true
ai_models: 
  - name: "Claude 3.5 Sonnet"
    version: "20241022"
    tasks: ["content", "code", "research"]
ai_tools:
  - name: "Anthropic Messages API"
    version: "2024-03"
  - name: "GitHub MCP Server"
    version: "latest"
ai_review_process: "Human reviewed and edited for technical accuracy"
---

As AI-generated and AI-assisted content becomes more prevalent, it's increasingly important to be transparent about how content is created. This post explains how to implement a comprehensive AI metadata system in Docusaurus blogs, allowing you to track and display information about the AI models and processes used in content creation.

<!--truncate-->

## The Metadata Architecture

Our implementation consists of three main components:

1. Front matter metadata structure
2. React component for display
3. Custom blog post template
4. Additional features for enhanced functionality

Let's dive into each component.

### Front Matter Structure

We'll start with a structured front matter format that captures essential information about AI involvement:

```yaml
---
title: Your Blog Post Title
authors: [authorName]
tags: [tag1, tag2]
# AI Metadata Fields
ai_generated: true
ai_models: 
  - name: "Claude 3.5 Sonnet"
    version: "20241022"
    tasks: ["content", "code"]
    confidence_score: 0.95
  - name: "GPT-4"
    version: "0613"
    tasks: ["research"]
    confidence_score: 0.92
ai_tools:
  - name: "Anthropic Messages API"
    version: "2024-03"
  - name: "GitHub Copilot"
    version: "latest"
ai_review_process: "Human reviewed and edited"
ai_quality_metrics:
  accuracy: 0.95
  coherence: 0.98
  technical_depth: 0.92
---
```

### AI Metadata Display Component

Here's our React component for displaying the metadata:

```jsx
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tooltip } from '@/components/ui/tooltip';

const AIMetadataDisplay = ({ metadata }) => {
  if (!metadata?.ai_generated) {
    return null;
  }

  const renderTooltip = (content, explanation) => (
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
};

export default AIMetadataDisplay;
```

### Schema Validation

To ensure consistency in our metadata, we'll implement Zod schema validation:

```typescript
import { z } from 'zod';

const AIModelSchema = z.object({
  name: z.string(),
  version: z.string(),
  tasks: z.array(z.string()).optional(),
  confidence_score: z.number().min(0).max(1).optional(),
});

const AIToolSchema = z.object({
  name: z.string(),
  version: z.string(),
});

const QualityMetricsSchema = z.object({
  accuracy: z.number().min(0).max(1),
  coherence: z.number().min(0).max(1),
  technical_depth: z.number().min(0).max(1),
});

const AIMetadataSchema = z.object({
  ai_generated: z.boolean(),
  ai_models: z.array(AIModelSchema).optional(),
  ai_tools: z.array(AIToolSchema).optional(),
  ai_review_process: z.string().optional(),
  ai_quality_metrics: QualityMetricsSchema.optional(),
});
```

### AI Content Index Page

To create an index of AI-generated content, we'll create a new page component:

```jsx
import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

export default function AIContentIndex() {
  const { blogs } = usePluginData('docusaurus-plugin-content-blog');
  
  const aiGeneratedPosts = blogs.filter(post => post.metadata.ai_generated);
  
  return (
    <div className="container margin-vert--lg">
      <h1>AI-Generated Content</h1>
      <div className="row">
        {aiGeneratedPosts.map((post) => (
          <div key={post.id} className="col col--6 margin-bottom--lg">
            <div className="card">
              <div className="card__header">
                <h3>{post.title}</h3>
              </div>
              <div className="card__body">
                <p>{post.description}</p>
                <div className="margin-top--sm">
                  {post.metadata.ai_models?.map((model) => (
                    <span key={model.name} className="badge badge--secondary margin-right--sm">
                      {model.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card__footer">
                <a className="button button--secondary" href={post.permalink}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Integration Steps

1. Install required dependencies:
```bash
npm install @docusaurus/theme-classic zod @headlessui/react
```

2. Swizzle the BlogPostItem component:
```bash
npm run swizzle @docusaurus/theme-classic BlogPostItem
```

3. Add the schema validation to your docusaurus.config.js:
```js
const { AIMetadataSchema } = require('./src/schemas/ai-metadata');

module.exports = {
  // ... other config
  customFields: {
    aiMetadataSchema: AIMetadataSchema,
  },
};
```

4. Create a new route for the AI content index:
```jsx
// src/pages/ai-content.tsx
export default function AIContent() {
  return <AIContentIndex />;
}
```

## Best Practices

1. **Consistency**: Always include AI metadata for any content that uses AI assistance
2. **Transparency**: Be clear about the level of AI involvement
3. **Quality Metrics**: Include objective measures of content quality
4. **Version Control**: Track AI model and tool versions
5. **Review Process**: Document the human review process
6. **Validation**: Use schema validation to ensure metadata consistency

## Future Enhancements

1. **Analytics Integration**: Track AI content performance
2. **Automated Quality Checks**: Implement pre-publish validation
3. **Model Comparison**: Compare different AI models' performance
4. **Interactive Visualizations**: Add charts for quality metrics
5. **Feedback Loop**: Collect user feedback on AI-generated content

## Conclusion

This implementation provides a robust foundation for tracking and displaying AI involvement in your Docusaurus content. By being transparent about AI usage, we build trust with our readers while maintaining high content quality standards.

The complete implementation is available in our GitHub repository, and we welcome contributions and suggestions for improvements.