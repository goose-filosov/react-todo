import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./App.scss";
import { Sidebar } from "components/sidebar";
import { Main } from "components/main";
import { IList } from "components/list/List";
import { ITodo } from "../todo/Todo";

interface ContextProps {
  lists: IList[];
  activeList: IList | null;
  addList: (list: IList) => void;
  removeList: (lid: string) => void;
  addTodo: (todo: ITodo, lid: string) => void;
  removeTodo: (lid: string, tid: string) => void;
  toggleTodoComplete: (tid: string, lid: string, completed: boolean) => void;
}

export const AppContext = createContext<Partial<ContextProps>>({});

export const App = () => {
  const [lists, setLists] = useState<IList[]>([]);
  const [activeList, setActiveList] = useState<IList>({
    name: "UI",
    id: "asdoj120nal",
    mark: "#fae",
  });

  const location = useLocation();

  useEffect(() => {
    const lists: IList[] = [
      { name: "UI", id: "asdoj120nal", mark: "#fae", todos: [] },
      { name: "UX", id: "asdoj120nal123", mark: "#fea", todos: [] },
      { name: "Frontend", id: "asdoj120nalzxc", mark: "#aea", todos: [] },
    ];
    setLists(lists);
  }, []);

  useEffect(() => {
    const listId = location.pathname.split("lists/")[1];
    const list = lists.find((list) => list.id === listId);
    if (list) {
      setActiveList(list);
    }
  }, [lists, location]);

  const addList = (list: IList) => {
    setLists([...lists, list]);
  };

  const removeList = (lid: string) => {
    const newLists = lists.filter((list) => list.id !== lid);
    setLists(newLists);
  };

  const addTodo = (todo: ITodo, lid: string) => {
    const newLists = lists.map((list) => {
      if (list.id === lid) {
        // @ts-ignore
        list.todos = [...list.todos, todo];
      }
      return list;
    });
    setLists(newLists);
  };

  const removeTodo = (tid: string, lid: string) => {
    const newLists = lists.map((list) => {
      if (list.id === lid) {
        list.todos = list.todos?.filter((todo) => todo.id !== tid);
      }
      return list;
    });
    setLists(newLists);
  };

  const toggleTodoComplete = (tid: string, lid: string, completed: boolean) => {
    const newList = lists.map((list) => {
      if (list.id === lid) {
        list.todos = list.todos?.map((todo) => {
          if (todo.id === tid) {
            todo.completed = completed;
          }
          return todo;
        });
      }
      return list;
    });
    setLists(newList);
  };

  return (
    <AppContext.Provider
      value={{
        lists,
        activeList,
        addList,
        removeList,
        addTodo,
        removeTodo,
        toggleTodoComplete,
      }}
    >
      <div className="app">
        <div className="app__wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
    </AppContext.Provider>
  );
};
