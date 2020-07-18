import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import "./List.scss";

export interface IListProps extends NavLinkProps {
  mark: React.ReactNode | JSX.Element;
  name: string;
  action?: React.ReactNode | JSX.Element;
  id?: string;
}

export const List: React.FC<IListProps> = ({ to, mark, name, action }) => {
  return (
    <NavLink exact to={to} className="list" activeClassName="list_active">
      <div className="list__mark">{mark}</div>
      <span className="list__title">{name}</span>
      <div className="list__actions">{action}</div>
    </NavLink>
  );
};
