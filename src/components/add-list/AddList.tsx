import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import "./AddList.scss";

import { Button } from "components/button";
import { Mark } from "components/mark";
import { Field } from "components/field";
import { MarkProps } from "components/mark/Mark";
import { AppContext } from "components/app-provider";

const marks = [
  {
    id: 77,
    bgColor: "#c9d1d3",
  },
  {
    id: 88,
    bgColor: "#4DD599",
  },
  {
    id: 99,
    bgColor: "#64C4ED",
  },
  {
    id: 1010,
    bgColor: "#FFBBCC",
  },
  {
    id: 1111,
    bgColor: "#B6E6BD",
  },
  {
    id: 1212,
    bgColor: "#C355F5",
  },
  {
    id: 1313,
    bgColor: "papayawhip",
  },
  {
    id: 1414,
    bgColor: "#FF6464",
  },
];

export interface AddListProps {
  clickHandler: () => void;
}

export const AddList: React.FC<AddListProps> = ({ clickHandler }) => {
  const [listName, setListName] = useState<string>("");
  const [selectedMark, setSelectedMark] = useState<string>("#c9d1d3");
  const { addList } = useContext(AppContext);

  const createNewFolder = () => {
    const list = {
      name: listName,
      mark: selectedMark,
      id: uuidv4().toString(),
      todos: [],
    };
    if (addList) {
      addList(list);
    }
    clickHandler();
  };

  return (
    <div className="add-list">
      <div className="add-list__wrapper">
        <button className="add-list__close" onClick={clickHandler}>
          <i className="fas fa-times" />
        </button>
        <Field
          placeholder={"Название папки"}
          value={listName}
          changeHandler={setListName}
        />
        <div className="add-list__palette palette">
          <div className="palette__list">
            {marks.map((mark: { id: number } & MarkProps) => {
              return (
                <div className="palette__item" key={mark.id}>
                  <Mark
                    size="19px"
                    bgColor={mark.bgColor}
                    onClick={() => {
                      setSelectedMark(mark.bgColor!);
                    }}
                    active={selectedMark === mark.bgColor && true}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="add-list__actions">
          <Button onClick={createNewFolder} full theme="success">
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};
