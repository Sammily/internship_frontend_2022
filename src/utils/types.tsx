export type Top100 = number[];

export type AllDataTop100 = {
  by: string;
  descendants: number;
  id: number;
  kids?: number | number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export type CurrentNewsContextType = {
  currentNews: number;
  setCurrentNews: (currentNews: number) => void;
};
