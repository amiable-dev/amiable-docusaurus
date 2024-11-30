export interface AIModel {
  name: string;
  version: string;
  tasks?: string[];
  confidence_score?: number;
}

export interface AITool {
  name: string;
  version: string;
}

export interface QualityMetrics {
  accuracy: number;
  coherence: number;
  technical_depth: number;
  [key: string]: number; // Allow for additional metrics
}

export interface AIMetadata {
  ai_generated: boolean;
  ai_models?: AIModel[];
  ai_tools?: AITool[];
  ai_review_process?: string;
  ai_quality_metrics?: QualityMetrics;
}

export interface AIMetadataDisplayProps {
  metadata: AIMetadata;
}