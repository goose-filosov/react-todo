import React from "react";

import "./TodoList.scss";

import { Todo } from "components/todo";
import { ITodo } from "components/todo/Todo";
import { IList } from "components/list/List";

interface TodoListProps {
  list: IList;
}

export const TodoList: React.FC<TodoListProps> = ({ list }) => {
  const { mark, name: title, todos } = list;

  return (
    <div className="todo-list">
      <div className="todo-list__wrapper">
        <h1 className="todo-list__title" style={{ color: mark }}>
          {title}
        </h1>
        <div className="todo-list__list">
          {todos &&
            todos.map((todo: ITodo) => {
              return (
                <div className="todo-list__item" key={todo.id}>
                  <Todo
                    id={todo.id}
                    completed={todo.completed}
                    title={todo.title}
                    onDeleted={() => {}}
                    onToggleDone={() => {}}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
