export interface ActionType {
  flag: (index: number) => void;
  dig: (index: number) => void;
  highlightNeighbors: (index: number) => void;
  clearHighlight: () => void;
}
