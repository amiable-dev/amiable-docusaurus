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

export { AIMetadataSchema, AIModelSchema, AIToolSchema, QualityMetricsSchema };