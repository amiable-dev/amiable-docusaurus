# Docusaurus Blog AI Metadata Components

## Component Structure

The AI metadata components follow Docusaurus theme conventions:

```
src/theme/
  BlogPost/             # Main blog post component namespace
    Header/             # Header section components
      AIMetadata/       # AI metadata specific components
        index.tsx       # Main component
        types.ts        # TypeScript definitions
    Content/            # (Future) Inline AI metadata features
    Footer/             # (Future) AI contribution summaries
```

## Naming Conventions

1. **Directory Structure**:
   - Follow Docusaurus's hierarchical organization
   - Use PascalCase for component directories
   - Group related components together

2. **Component Names**:
   - Use PascalCase
   - Be descriptive and specific
   - Include parent component context
   - Example: `AIMetadata` within `BlogPost/Header`

3. **File Names**:
   - Use `index.tsx` for main component files
   - Use descriptive names for supporting files
   - Keep extensions appropriate (.tsx, .ts, .css)

## Integration

1. Swizzle the BlogPost Header:
```bash
npm run swizzle @docusaurus/theme-classic BlogPost/Header -- --wrap
```

2. Import and use components:
```tsx
import AIMetadata from '@theme/BlogPost/Header/AIMetadata';
```

## Future Extensibility

The structure supports future AI-related features:

1. **Content Section**:
   - Inline AI contributions
   - Section-specific metadata
   - AI-generated content markers

2. **Footer Section**:
   - AI contribution summaries
   - Model performance metrics
   - User feedback integration

## Migration Guide

If you're using the older component structure:

1. Update import paths:
```diff
- import AIMetadataDisplay from '@site/src/components/AIMetadataDisplay';
+ import AIMetadata from '@theme/BlogPost/Header/AIMetadata';
```

2. Update component usage:
```diff
- <AIMetadataDisplay metadata={metadata} />
+ <AIMetadata metadata={metadata} />
```

## Contributing

When adding new AI-related components:

1. Follow the established directory structure
2. Use appropriate naming conventions
3. Include TypeScript definitions
4. Add documentation
5. Consider component placement in the blog post structure