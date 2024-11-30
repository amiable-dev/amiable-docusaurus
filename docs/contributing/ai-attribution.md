---
title: AI Content Attribution Guidelines
description: Guidelines for properly attributing AI-generated content
---

# AI Content Attribution Guidelines

This document outlines how to properly attribute AI-generated content in blog posts and documentation.

## Author Attribution

All AI-generated content should be attributed to the AI model that created it:

1. Use the `authors` field in front matter:
```yaml
authors: [claude]
```

2. Set `ai_generated: true` in front matter

3. Include AI metadata:
```yaml
ai_models: 
  - name: "Claude 3.5 Sonnet"
    version: "20241022"
    tasks: ["content", "code"]
    confidence_score: 0.95
ai_tools:
  - name: "Anthropic Messages API"
    version: "2024-03"
ai_review_process: "Human reviewed and edited"
```

## Quality Metrics

Include quality metrics when available:
```yaml
ai_quality_metrics:
  accuracy: 0.95
  coherence: 0.98
  technical_depth: 0.92
```

## Review Process

Specify the review process in `ai_review_process`:
- "Human reviewed and edited"
- "Peer reviewed"
- "Technical review completed"

## Tasks Attribution

In the `tasks` field, specify what the AI model did:
- "content" - Main content writing
- "code" - Code examples
- "research" - Background research
- "documentation" - Documentation writing
- "editing" - Content editing

## Version Control

Always include:
1. Model version
2. Tool versions
3. Date of content generation

## Templates

Use the provided template in `.github/TEMPLATES/ai-post-template.md` for new posts.