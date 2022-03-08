import React, { createContext, useReducer } from "react";
export const StateContext = createContext({});
const reducer = (state, action) => {
  switch (action.type) {
    case "changeToRed":
      return {
        ...state,
        colorValue: action.color,
      };
    case "changeToBlue":
      return {
        ...state,
        colorValue: action.color,
      };
    case "changeNumber":
      return {
        ...state,
        numberValue: action.number,
      };
    default:
      return state;
  }
};

export const State = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    colorValue:"",
    numberValue:"",
    arrayData:["1","2","3","4"]
  });
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
};
