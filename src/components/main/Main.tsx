import React from "react";
import { Route } from "react-router-dom";

import "./Main.scss";
import { TodoList } from "components/todo-list";

export const Main = () => {
  return (
    <div className="main">
      <div className="main__wrapper">
        <Route exact path="/">
          {lists.map((list) => {
            return <TodoList key={list.id} list={list} />;
          })}
        </Route>
        <Route path="/lists/:id">
          <TodoList list={lists[0]} />
        </Route>
      </div>
    </div>
  );
};
