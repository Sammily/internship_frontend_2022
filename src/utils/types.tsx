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

export type CommentsType = {
  id: number;
  by: string;
  kids?: number | number[];
  time: number;
  parent: number;
  text: string;
}

export type State = {
  newsIds: newsIds;
};

export type newsIds = {
  newsIds: Top100[];
}

export type StateAll = {
  newsIdsAllData: newsIdsAll;
};

export type newsIdsAll = {
  newsIdsAllData: AllDataTop100[];
}
