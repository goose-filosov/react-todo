import React from "react";

import "./App.scss";
import { Sidebar } from "components/sidebar";
import { Main } from "components/main";

export const App = () => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};
