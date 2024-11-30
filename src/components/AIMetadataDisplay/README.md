# AI Metadata Display Component

A React component for displaying AI-related metadata in Docusaurus blog posts.

## Installation

1. Install required dependencies:
```bash
npm install @docusaurus/theme-classic zod @headlessui/react
```

2. Install shadcn/ui components:
```bash
npm install @/components/ui
```

## Theme Integration

1. Swizzle the BlogPostItem component using the wrap option:
```bash
npm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap
```

2. Convert the generated wrapper to TypeScript by renaming it to `index.tsx` and updating its contents to:
```tsx
import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import AIMetadataDisplay from '@site/src/components/AIMetadataDisplay';
import type {Props} from '@theme/BlogPostItem';

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const { content } = props;
  const { metadata } = content;
  
  return (
    <>
      <AIMetadataDisplay metadata={metadata} />
      <BlogPostItem {...props} />
    </>
  );
}
```

## Why Wrap Instead of Eject?

We use the `--wrap` option instead of ejecting because:
1. It's safer for upgrades
2. Requires less maintenance
3. Keeps theme code intact
4. Reduces risk of breaking changes

## Usage

Add AI metadata to your blog post front matter:

```yaml
---
title: Your Blog Post
ai_generated: true
ai_models: 
  - name: "Claude 3.5 Sonnet"
    version: "20241022"
    tasks: ["content", "code"]
    confidence_score: 0.95
ai_tools:
  - name: "Anthropic Messages API"
    version: "2024-03"
ai_review_process: "Human reviewed and edited"
ai_quality_metrics:
  accuracy: 0.95
  coherence: 0.98
  technical_depth: 0.92
---
```

## Component Features

- Displays AI models used with versions and tasks
- Shows confidence scores
- Lists tools used in content creation
- Shows quality metrics
- Displays review process
- Supports dark mode
- Fully accessible
- Responsive design

## Type Safety

The component and wrapper are fully typed using TypeScript, providing:
- Type checking for metadata structure
- Proper component props validation
- Better IDE support
- Safer refactoring

## Troubleshooting

1. If the component doesn't appear:
   - Verify AI metadata is present in front matter
   - Check `ai_generated` is set to true
   - Ensure BlogPostItem is properly swizzled with --wrap option
   - Verify TypeScript compilation is successful

2. Styling issues:
   - Verify shadcn/ui components are installed
   - Check Tailwind configuration
   - Verify theme integration

3. TypeScript errors:
   - Ensure @docusaurus/theme-classic types are installed
   - Check import paths are correct
   - Verify Props type is properly imported

## Contributing

Feel free to submit issues and enhancement requests!