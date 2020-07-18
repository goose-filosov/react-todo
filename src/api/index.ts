import { IList } from "components/list/List";
import { ITodo } from "components/todo/Todo";

export const fetchLists = (setFunction: (list: IList[]) => void) => {
  fetch("http://localhost:3004/lists?_embed=todos")
    .then((res) => res.json())
    .then((lists) => {
      setFunction(lists);
    });
};

export const addListToDB = (list: IList) => {
  fetch("http://localhost:3004/lists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list),
  }).catch((err) => console.log("Error: ", err));
};

export const removeListForDB = (lid: string) => {
  fetch(`http://localhost:3004/lists/${lid}`, {
    method: "DELETE",
  }).catch((err) => console.log("Error: ", err));
};

export const addTodoToDB = (todo: ITodo) => {
  fetch("http://localhost:3004/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).catch((err) => console.log("Error: ", err));
};

export const removeTodoForDB = (tid: string) => {
  fetch(`http://localhost:3004/todos/${tid}`, {
    method: "DELETE",
  }).catch((err) => console.log("Error: ", err));
};

export const toggleTodoCompleted = (tid: string, completed: boolean) => {
  fetch(`http://localhost:3004/todos/${tid}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  }).catch((err) => console.log("Error: ", err));
};
