import React, { useContext } from "react";
import "./Lists.scss";

import { List } from "components/list";
import { Mark } from "components/mark";
import { Button } from "components/button";
import { IList } from "components/list/List";
import { AppContext } from "components/app-provider";

interface ListsProps {
  lists: IList[];
}

export const Lists: React.FC<ListsProps> = ({ lists }) => {
  const { removeList } = useContext(AppContext);

  return (
    <nav className="lists">
      <div className="lists__wrapper">
        <ul className="lists__items">
          {lists &&
            lists.map((list) => {
              return (
                <li className="lists__item" key={list.id}>
                  <List
                    mark={<Mark bgColor={`${list.mark}`} />}
                    name={list.name}
                    to={`/lists/${list.id}`}
                    action={
                      <Button
                        icon
                        onClick={() => {
                          if (removeList) {
                            removeList(list.id!);
                          }
                        }}
                      >
                        <i
                          className="fas fa-times"
                          style={{ fontSize: "16px" }}
                        />
                      </Button>
                    }
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
};
