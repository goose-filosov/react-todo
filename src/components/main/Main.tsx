import React from "react";
import { Route } from "react-router-dom";

import "./Main.scss";

export const Main = () => {
  return (
    <div className="main">
      <div className="main__wrapper">
        <Route path="/"></Route>
        <Route path="/lists/:id"></Route>
      </div>
    </div>
  );
};
