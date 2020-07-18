import React from "react";

import "./Sidebar.scss";
import { Lists } from "components/lists";
import { List } from "components/list";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__header">
          <List
            name="Все задачи"
            to="/"
            mark={<i className="fas fa-list-ul" />}
          />
        </div>
        <div className="sidebar__body">
          <Lists lists={[]} />
        </div>
      </div>
    </div>
  );
};
