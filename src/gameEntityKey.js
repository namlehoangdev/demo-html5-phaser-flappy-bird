export const GameEntityKey = {
  BIRD: "BIRD",
  BACKGROUND: "BACKGROUND",
  GROUND: "GROUND",
  TILE_MAP: "TILE_MAP",
  JUMP_GROUND: "Ground",
};

export const GameAnimationKey = {
  [GameEntityKey.BIRD]: {
    FLY: `${GameEntityKey.BIRD}_FLY`,
    STOP: `${GameEntityKey.BIRD}_STOP`,
  },
};

export const GAME_WIDTH = 657;
export const GAME_HEIGHT = 1159;
