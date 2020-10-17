export interface ITodosStore {
  allIds: number[],
  byIds: { [key: number]: {
    content : string;
    completed: boolean;
  }};
}