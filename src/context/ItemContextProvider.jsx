import { createContext, useReducer, useState } from "react";
import { item, reducer } from "../reducer";

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [state, dispatch] = useReducer(reducer, item);
  return (
    <ItemContext.Provider value={{ state, dispatch, items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};
