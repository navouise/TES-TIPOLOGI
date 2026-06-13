export type CognitiveFunction = 'Ni' | 'Ne' | 'Si' | 'Se' | 'Fi' | 'Fe' | 'Ti' | 'Te';

export type FunctionPosition = 
  | 'dominantNi' | 'auxiliaryNi' | 'tertiaryNi' | 'inferiorNi'
  | 'dominantNe' | 'auxiliaryNe' | 'tertiaryNe' | 'inferiorNe'
  | 'dominantSi' | 'auxiliarySi' | 'tertiarySi' | 'inferiorSi'
  | 'dominantSe' | 'auxiliarySe' | 'tertiarySe' | 'inferiorSe'
  | 'dominantFi' | 'auxiliaryFi' | 'tertiaryFi' | 'inferiorFi'
  | 'dominantFe' | 'auxiliaryFe' | 'tertiaryFe' | 'inferiorFe'
  | 'dominantTi' | 'auxiliaryTi' | 'tertiaryTi' | 'inferiorTi'
  | 'dominantTe' | 'auxiliaryTe' | 'tertiaryTe' | 'inferiorTe';

export type EnneagramType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type EnneagramInstinct = 'sp' | 'so' | 'sx';

export type BigFiveTrait = 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';

export type TemperamentType = 'melancholic' | 'phlegmatic' | 'choleric' | 'sanguine';

export type MoralAlignment = 
  | 'lawfulGood' | 'neutralGood' | 'chaoticGood'
  | 'lawfulNeutral' | 'trueNeutral' | 'chaoticNeutral'
  | 'lawfulEvil' | 'neutralEvil' | 'chaoticEvil';

export type AttitudinalPsyche = 'volition' | 'emotion' | 'logic' | 'physics';

export interface Scores {
  functions?: Partial<Record<CognitiveFunction, number>>;
  positions?: Partial<Record<FunctionPosition, number>>;
  enneagram?: Partial<Record<EnneagramType, number>>;
  instincts?: Partial<Record<EnneagramInstinct, number>>;
  bigFive?: Partial<Record<BigFiveTrait, number>>;
  temperament?: Partial<Record<TemperamentType, number>>;
  moral?: Partial<Record<MoralAlignment, number>>;
  biasControl?: number; // Nilai negatif untuk jawaban yang terdengar terlalu "ideal"
}

export interface Option {
  text: string;
  scores: Scores;
}

export interface Question {
  id: string;
  text: string;
  reminder?: string;
  options: Option[];
}

export interface MBTIStack {
  type: string;
  dominant: CognitiveFunction;
  auxiliary: CognitiveFunction;
  tertiary: CognitiveFunction;
  inferior: CognitiveFunction;
}

export interface FinalScores {
  functions: Record<CognitiveFunction, number>;
  enneagram: Record<EnneagramType, number>;
  instincts: Record<EnneagramInstinct, number>;
  bigFive: Record<BigFiveTrait, number>;
  temperament: Record<TemperamentType, number>;
  moral: Record<MoralAlignment, number>;
  biasControl: number;
  totalAnswered: number;
}

