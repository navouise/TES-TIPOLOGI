import { 
  FinalScores, 
  Option, 
  CognitiveFunction, 
  EnneagramType, 
  BigFiveTrait, 
  TemperamentType, 
  MoralAlignment, 
  EnneagramInstinct,
  MBTIStack
} from '../types';

export const calculateScores = (answers: Option[]): FinalScores => {
  const initialScores: FinalScores = {
    functions: { Ni: 0, Ne: 0, Si: 0, Se: 0, Fi: 0, Fe: 0, Ti: 0, Te: 0 },
    enneagram: { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 },
    instincts: { sp: 0, so: 0, sx: 0 },
    bigFive: { openness: 0, conscientiousness: 0, extraversion: 0, agreeableness: 0, neuroticism: 0 },
    temperament: { melancholic: 0, phlegmatic: 0, choleric: 0, sanguine: 0 },
    moral: { 
      lawfulGood: 0, neutralGood: 0, chaoticGood: 0, 
      lawfulNeutral: 0, trueNeutral: 0, chaoticNeutral: 0, 
      lawfulEvil: 0, neutralEvil: 0, chaoticEvil: 0 
    },
    biasControl: 0,
    totalAnswered: 0
  };

  answers.forEach(answer => {
    if (Object.keys(answer.scores).length === 0) return; // Skipped questions
    initialScores.totalAnswered += 1;

    const s = answer.scores;

    // Functions
    if (s.functions) {
      (Object.keys(s.functions) as CognitiveFunction[]).forEach(fn => {
        initialScores.functions[fn] += s.functions![fn] || 0;
      });
    }

    // Advanced position scoring could be added here if needed to boost weights

    // Enneagram
    if (s.enneagram) {
      (Object.keys(s.enneagram) as EnneagramType[]).forEach(type => {
        initialScores.enneagram[type] += s.enneagram![type] || 0;
      });
    }

    // Instincts
    if (s.instincts) {
      (Object.keys(s.instincts) as EnneagramInstinct[]).forEach(inst => {
        initialScores.instincts[inst] += s.instincts![inst] || 0;
      });
    }

    // Big Five
    if (s.bigFive) {
      (Object.keys(s.bigFive) as BigFiveTrait[]).forEach(trait => {
        initialScores.bigFive[trait] += s.bigFive![trait] || 0;
      });
    }

    // Temperament
    if (s.temperament) {
      (Object.keys(s.temperament) as TemperamentType[]).forEach(temp => {
        initialScores.temperament[temp] += s.temperament![temp] || 0;
      });
    }

    // Moral
    if (s.moral) {
      (Object.keys(s.moral) as MoralAlignment[]).forEach(m => {
        initialScores.moral[m] += s.moral![m] || 0;
      });
    }

    if (s.biasControl) {
      initialScores.biasControl += s.biasControl;
    }
  });

  return initialScores;
};

// MBTI Type Stacks Definition
export const mbtiStacks: MBTIStack[] = [
  { type: 'INTJ', dominant: 'Ni', auxiliary: 'Te', tertiary: 'Fi', inferior: 'Se' },
  { type: 'INFJ', dominant: 'Ni', auxiliary: 'Fe', tertiary: 'Ti', inferior: 'Se' },
  { type: 'ENTJ', dominant: 'Te', auxiliary: 'Ni', tertiary: 'Se', inferior: 'Fi' },
  { type: 'ENFJ', dominant: 'Fe', auxiliary: 'Ni', tertiary: 'Se', inferior: 'Ti' },
  { type: 'INTP', dominant: 'Ti', auxiliary: 'Ne', tertiary: 'Si', inferior: 'Fe' },
  { type: 'INFP', dominant: 'Fi', auxiliary: 'Ne', tertiary: 'Si', inferior: 'Te' },
  { type: 'ENTP', dominant: 'Ne', auxiliary: 'Ti', tertiary: 'Fe', inferior: 'Si' },
  { type: 'ENFP', dominant: 'Ne', auxiliary: 'Fi', tertiary: 'Te', inferior: 'Si' },
  { type: 'ISTJ', dominant: 'Si', auxiliary: 'Te', tertiary: 'Fi', inferior: 'Ne' },
  { type: 'ISFJ', dominant: 'Si', auxiliary: 'Fe', tertiary: 'Ti', inferior: 'Ne' },
  { type: 'ESTJ', dominant: 'Te', auxiliary: 'Si', tertiary: 'Ne', inferior: 'Fi' },
  { type: 'ESFJ', dominant: 'Fe', auxiliary: 'Si', tertiary: 'Ne', inferior: 'Ti' },
  { type: 'ISTP', dominant: 'Ti', auxiliary: 'Se', tertiary: 'Ni', inferior: 'Fe' },
  { type: 'ISFP', dominant: 'Fi', auxiliary: 'Se', tertiary: 'Ni', inferior: 'Te' },
  { type: 'ESTP', dominant: 'Se', auxiliary: 'Ti', tertiary: 'Fe', inferior: 'Ni' },
  { type: 'ESFP', dominant: 'Se', auxiliary: 'Fi', tertiary: 'Te', inferior: 'Ni' },
];

export const calculateMBTI = (funcScores: Record<CognitiveFunction, number>) => {
  // Normalize scores
  const maxScore = Math.max(...Object.values(funcScores));
  // If maxScore is 0, prevent division by zero
  const safeMax = maxScore > 0 ? maxScore : 1;

  const stackMatches = mbtiStacks.map(stack => {
    const domScore = funcScores[stack.dominant] * 1.5; // Dominant weight
    const auxScore = funcScores[stack.auxiliary] * 1.0; // Auxiliary weight
    const tertScore = funcScores[stack.tertiary] * 0.5; // Tertiary weight
    const infScore = funcScores[stack.inferior] * 0.2; // Inferior weight

    // Penalties
    const domShadow = funcScores[getShadow(stack.dominant)] * -0.5;
    
    let totalMatch = domScore + auxScore + tertScore + infScore + domShadow;
    return { type: stack.type, score: totalMatch, stack };
  });

  stackMatches.sort((a, b) => b.score - a.score);
  return stackMatches.slice(0, 3);
};

const getShadow = (func: CognitiveFunction): CognitiveFunction => {
  const shadowMap: Record<CognitiveFunction, CognitiveFunction> = {
    Ni: 'Ne', Ne: 'Ni',
    Si: 'Se', Se: 'Si',
    Fi: 'Fe', Fe: 'Fi',
    Ti: 'Te', Te: 'Ti'
  };
  return shadowMap[func];
}

