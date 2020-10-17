export const SET_FILTER = "SET_FILTER";

type visibilityFiltersInterface = {
  [key: string]: string
}

export const VISIBILITY_FILTERS : visibilityFiltersInterface = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETE: "incomplete"
};
