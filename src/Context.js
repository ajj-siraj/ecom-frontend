import { useReducer, createContext } from "react";
// import { newProducts } from "./assets/data/products";

const Ctx = createContext();

const { Provider } = Ctx;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case Types.ADD_TO_CART: {
        let idx = state.findIndex((item) => item.id === action.payload.id);
        if(idx === -1){
          let item = {...action.payload};
          item.quantity = 1;
          const newState = [item, ...state];
          return newState;
        }
        //check the old quantity if it exists, then icrement if exists, or create if doesn't
        //return the quantity with the item if the item exists
        // const newState = old state & quantity
        let newState = [...state];
        let item = {...newState[idx]};
        let quantity = item?.quantity ? item.quantity+1 : 1;

        item.quantity = quantity;
        console.log("ITEM ADDED: ", item);
        newState.splice(idx, 1);
        newState.push(item);
        return newState;
      }

      case Types.REMOVE_FROM_CART: {
        let idx = state.findIndex((item) => item.id === action.payload);
        if (idx === -1)
          throw new Error(
            "Action was triggered even though item does not exist in state. Revise the state logic."
          );
        let newState = [...state];
        newState[idx].quantity = 0;
        newState.splice(idx, 1);
        return newState;
      }

      default:
        throw new Error("Action does not exist.");
    }
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { Ctx, StateProvider };

export const Types = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};
