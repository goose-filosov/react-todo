import React, { useContext } from "react";
import { Route } from "react-router-dom";

import "./Main.scss";
import { TodoList } from "components/todo-list";
import { AppContext } from "components/app-provider";

export const Main = () => {
  const { lists, activeList } = useContext(AppContext);

  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__list">
          <Route exact path="/">
            {lists &&
              lists.map((list) => (
                <div className="main__item" key={list.id}>
                  <TodoList list={list} />
                </div>
              ))}
          </Route>
        </div>
        <Route path="/lists/:id">
          <TodoList list={activeList!} />
        </Route>
      </div>
    </div>
  );
};
