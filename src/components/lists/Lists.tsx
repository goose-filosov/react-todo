import React from "react";
import "./Lists.scss";

import { List } from "components/list";
import { Mark } from "components/mark";
import { Button } from "components/button";
import { IList } from "components/list/List";

interface ListsProps {
  lists: IList[];
}

export const Lists: React.FC<ListsProps> = ({ lists }) => {
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
                          console.log("Click");
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
