import React from "react";

import "./Todo.scss";
import { Checkbox } from "components/checkbox";
import { Button } from "components/button";

export interface ITodo {
  title: string;
  id: string;
  completed: boolean;
}

interface TodoProps extends ITodo {
  onDeleted: () => void;
  onToggleDone: () => void;
}

export const Todo: React.FC<TodoProps> = ({
  onDeleted,
  onToggleDone,
  completed,
  title,
}) => {
  return (
    <div className="todo">
      <div className="todo__wrapper">
        <div className="todo__checkbox">
          <Checkbox checked={completed} onChange={onToggleDone} />
        </div>
        <div className="todo__title">{title}</div>
        <div className="todo__actions">
          <Button icon onClick={onDeleted}>
            <i style={{ fontSize: "22px" }} className="fas fa-times" />
          </Button>
        </div>
      </div>
    </div>
  );
};
