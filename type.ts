type GlitchOption = {
  updateInterval: number;
  mutate: number;
  deleteMutate: number;
  addMutate: number;
};

type ConstructOption = {
  loop: boolean;
  loopInterval: number;
  forwardInterval: number;
  updateInterval: number;
  mutateProbability: number;
  mutateAfterConstructed: boolean;
  mutateAfterProbability: number;
};

export type { GlitchOption, ConstructOption };
