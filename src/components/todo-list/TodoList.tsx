import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import "./TodoList.scss";

import { Todo } from "components/todo";
import { ITodo } from "components/todo/Todo";
import { IList } from "components/list/List";
import { Button } from "components/button";
import { AddTodo } from "components/add-todo";
import { AppContext } from "../app/App";

interface TodoListProps {
  list: IList;
}

export const TodoList: React.FC<TodoListProps> = ({ list }) => {
  const { mark, name: title, todos, id } = list;
  const [addFormVisible, setAddFormVisible] = useState(false);
  const { removeTodo, toggleTodoComplete } = useContext(AppContext);

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
                    onDeleted={() => {
                      if (removeTodo) {
                        removeTodo(todo.id, id!);
                      }
                    }}
                    onToggleDone={() => {
                      if (toggleTodoComplete) {
                        toggleTodoComplete(todo.id, id!, !todo.completed);
                      }
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div className="todo-list__add-item">
          {!addFormVisible ? (
            <Button
              onClick={() => setAddFormVisible(!addFormVisible)}
              theme="secondary"
            >
              Новая задача
            </Button>
          ) : (
            <AddTodo
              lid={id!}
              clickHandler={() => setAddFormVisible(!addFormVisible)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
