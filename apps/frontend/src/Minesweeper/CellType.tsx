export interface CellType {
  row: number;
  column: number;
  index: number;
  isShown: boolean;
  isMine: boolean;
  isFlag: boolean;
  prob: number;
  num: number;
  neighbors: number[];
  initDate: string;
}
