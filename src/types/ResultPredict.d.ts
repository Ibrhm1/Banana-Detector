export type ResultPredictType = {
  all_probabilities: {
    busuk: number;
    matang: number;
    mentah: number;
    terlalu_matang: number;
  };
  confidence: number;
  is_valid_banana: boolean;
  prediction: string;
  validation?: {
    confidence_gap?: number;
    max_confidence?: number;
    passed?: boolean;
    reason?: string;
  };
};
