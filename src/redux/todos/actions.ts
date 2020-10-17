import {ADD_TODO, TOGGLE_TODO} from "./constants";


let nextTodoId = 0;

export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: { id }
});