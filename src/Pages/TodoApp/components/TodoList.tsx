import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../../../redux/todos/selectors";

const TodoList = ({ todos } : any) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo : any, index : any) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);


const mapStateToProps = (state : any) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};


export default connect(mapStateToProps)(TodoList);
