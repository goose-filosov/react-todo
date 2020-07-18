import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import "./AddTodo.scss";
import { Button } from "components/button";
import { Field } from "components/field";
import { AppContext } from "../app/App";

export interface AddTodoProps {
  clickHandler: () => void;
  lid: string;
}

export const AddTodo: React.FC<AddTodoProps> = ({ clickHandler, lid }) => {
  const [title, setTitle] = useState("");
  const { addTodo } = useContext(AppContext);

  const handleClick = () => {
    if (title.trim().length) {
      const todo = {
        title,
        id: uuidv4(),
        completed: false,
        listId: lid,
      };
      if (addTodo) {
        addTodo(todo, lid);
      }
      setTitle("");
      clickHandler();
    }
  };

  return (
    <div className="add-todo">
      <div className="add-todo__wrapper">
        <div className="add-todo__main">
          <Field
            placeholder={"Текст задачи"}
            full
            changeHandler={setTitle}
            value={title}
          />
        </div>
        <div className="add-todo__side">
          <Button theme="success" onClick={handleClick}>
            Добавить задачу
          </Button>
          <Button onClick={clickHandler}>Отмена</Button>
        </div>
      </div>
    </div>
  );
};
