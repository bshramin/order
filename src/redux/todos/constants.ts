export const ADD_TODO = "add-todo";
export const TOGGLE_TODO = "toggle-todo";

type visibilityFiltersInterface = {
  [key: string]: string
}

export const VISIBILITY_FILTERS : visibilityFiltersInterface = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETE: "incomplete"
};