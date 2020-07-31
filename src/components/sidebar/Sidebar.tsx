import React, { useState, useContext } from "react";

import "./Sidebar.scss";
import { Lists } from "components/lists";
import { List } from "components/list";
import { Button } from "components/button";
import { AddList } from "components/add-list";
import { AppContext } from "components/app-provider";

export const Sidebar = () => {
  const [modal, setModal] = useState(false);
  const { lists } = useContext(AppContext);

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
          <Lists lists={lists!} />
        </div>
        <div className="sidebar__footer">
          <Button onClick={() => setModal(!modal)}>
            <i className="fas fa-plus" />
            Добавить папку
          </Button>
          {modal && (
            <div className="sidebar__modal">
              <AddList clickHandler={() => setModal(!modal)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
