declare module '@docusaurus/plugin-content-blog' {
  export interface BlogPostFrontMatter {
    // Standard Docusaurus fields
    title: string;
    authors?: string[];
    tags?: string[];
    draft?: boolean;
    hide_table_of_contents?: boolean;
    toc_min_heading_level?: number;
    toc_max_heading_level?: number;

    // AI Metadata fields
    ai_generated?: boolean;
    ai_models?: {
      name: string;
      version: string;
      tasks?: string[];
      confidence_score?: number;
    }[];
    ai_tools?: {
      name: string;
      version: string;
    }[];
    ai_review_process?: string;
    ai_quality_metrics?: {
      accuracy: number;
      coherence: number;
      technical_depth: number;
      [key: string]: number;
    };
  }
}