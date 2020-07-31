import React from "react";

import "./App.scss";
import { Sidebar } from "components/sidebar";
import { Main } from "components/main";
import { AppProvider } from "components/app-provider";

export const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <div className="app__wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
    </AppProvider>
  );
};
