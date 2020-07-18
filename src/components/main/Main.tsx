import React, { useContext } from "react";
import { Route } from "react-router-dom";

import "./Main.scss";
import { TodoList } from "components/todo-list";
import { AppContext } from "components/app/App";

export const Main = () => {
  const { lists, activeList } = useContext(AppContext);

  return (
    <div className="main">
      <div className="main__wrapper">
        <Route exact path="/">
          {lists &&
            lists.map((list) => {
              return <TodoList key={list.id} list={list} />;
            })}
        </Route>
        <Route path="/lists/:id">
          <TodoList list={activeList!} />
        </Route>
      </div>
    </div>
  );
};
