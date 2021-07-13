export const GameEntityKey = {
  BIRD: "BIRD",
  BACKGROUND: "BACKGROUND",
};

export const GameAnimationKey = {
  [GameEntityKey.BIRD]: {
    FLY: `${GameEntityKey.BIRD}_FLY`,
    STOP: `${GameEntityKey.BIRD}_STOP`,
  },
};

export const GAME_WIDTH = 375 * 2;
export const GAME_HEIGHT = 600 * 2;
