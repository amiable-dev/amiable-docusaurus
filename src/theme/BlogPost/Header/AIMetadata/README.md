# AI Metadata Display Component

A React component for displaying AI-related metadata in Docusaurus blog posts.

## Installation

1. Install required dependencies:
```bash
npm install @docusaurus/theme-classic zod @headlessui/react @testing-library/react @testing-library/jest-dom jest
```

2. Configure TypeScript (if not already done):
```json
{
  "compilerOptions": {
    "jsx": "react",
    "lib": ["DOM", "ESNext"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## Usage

1. Swizzle the BlogPost Header component:
```bash
npm run swizzle @docusaurus/theme-classic BlogPost/Header -- --wrap
```

2. Add AI metadata to your blog posts:
```yaml
---
title: Your Blog Post
authors: [author]
tags: [tag1, tag2]
ai_generated: true
ai_models: 
  - name: "AI Model Name"
    version: "1.0"
    tasks: ["content", "code"]
    confidence_score: 0.95
ai_tools:
  - name: "Tool Name"
    version: "1.0"
ai_review_process: "Human reviewed and edited"
ai_quality_metrics:
  accuracy: 0.95
  coherence: 0.98
  technical_depth: 0.92
---
```

## Metadata Format

### AI Models
```typescript
interface AIModel {
  name: string;      // Name of the AI model
  version: string;   // Version or date of the model
  tasks?: string[];  // Types of tasks performed
  confidence_score?: number; // 0-1 confidence rating
}
```

### AI Tools
```typescript
interface AITool {
  name: string;    // Name of the tool
  version: string; // Version of the tool
}
```

### Quality Metrics
```typescript
interface QualityMetrics {
  accuracy: number;       // 0-1 rating
  coherence: number;      // 0-1 rating
  technical_depth: number;// 0-1 rating
  [key: string]: number;  // Additional metrics
}
```

## Customization

### Styling
The component uses Tailwind CSS classes for styling. You can customize the appearance by:

1. Modifying the className props:
```tsx
<Card className="your-custom-classes">
```

2. Adding custom CSS:
```css
/* your-custom-styles.css */
.ai-metadata-card {
  /* custom styles */
}
```

### Error Handling
The component includes built-in error handling:

1. Invalid metadata format:
```tsx
if (!Array.isArray(metadata.ai_models)) {
  return <Alert variant="destructive">...</Alert>;
}
```

2. Missing optional fields:
```tsx
{metadata.ai_tools && (
  // Render tools section
)}
```

## Testing

1. Run tests:
```bash
npm test
```

2. Check coverage:
```bash
npm test -- --coverage
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Add tests for any new functionality
4. Ensure tests pass: `npm test`
5. Submit a pull request

## Troubleshooting

### Common Issues

1. Component not rendering:
   - Verify ai_generated is set to true
   - Check metadata format
   - Verify swizzling is correct

2. Styling issues:
   - Check Tailwind classes
   - Verify theme configuration
   - Check dark mode settings

3. Type errors:
   - Verify metadata structure
   - Check TypeScript configuration
   - Update type definitions if needed