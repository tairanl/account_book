import { useContext, useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

// 1. initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 1000 },
    { id: 3, text: "Book", amount: -10 },
  ],
};

// 3 Create context object and obtain the initialState
export const TransactionContext = createContext(initialState);

// 4 Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // action (cases)
  function deletetransacton(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransactiuon(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deletetransacton,
        addTransactiuon,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
