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

1. Swizzle the BlogPostItem component:
```bash
npm run swizzle @docusaurus/theme-classic BlogPostItem
```

2. Replace the content of `src/theme/BlogPostItem/index.js` with:
```jsx
import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import AIMetadataDisplay from '@site/src/components/AIMetadataDisplay';

export default function BlogPostItemWrapper(props) {
  const { metadata } = props.content;
  
  return (
    <>
      <AIMetadataDisplay metadata={metadata} />
      <BlogPostItem {...props} />
    </>
  );
}
```

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

## Customization

You can customize the component by:

1. Modifying the Tailwind classes in the component
2. Adjusting the tooltips and explanations
3. Adding new metadata fields (requires type updates)

## Troubleshooting

1. If the component doesn't appear:
   - Verify AI metadata is present in front matter
   - Check `ai_generated` is set to true
   - Ensure BlogPostItem is properly swizzled

2. Styling issues:
   - Verify shadcn/ui components are installed
   - Check Tailwind configuration
   - Verify theme integration

## Contributing

Feel free to submit issues and enhancement requests!