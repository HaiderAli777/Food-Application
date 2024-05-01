import { act } from "react-dom/test-utils";
import CartContext from "./CartContext";
import { useReducer } from "react";
const ContextProvider = (props) => {
  const intialStage = {
    productAmount: 0,
    totalAmount: 0,
    item: [],
  };
  let updatedItem;
  let updatedTotalAmount;
  let individualAmount;
  const cartReducer = (state, action) => {
    if (action.type == "Add") {
      const index = state.item.findIndex((item) => {
        return item.id === action.item.id;
      });

      const existCart = state.item[index];
      if (existCart) {
        let obj = {
          id: existCart.id,
          amount: existCart.amount + action.item.amount,
          name: existCart.name,
          prize: existCart.prize,
          productAmount: existCart.productAmount + action.item.productAmount,
        };
        console.log(obj.productAmount);
        console.log(obj.productAmount);
        console.log(
          existCart.finalValue,
          action.item.finalValue,
          existCart.finalValue,
          action.item.productAmount
        );
        updatedItem = [...state.item];
        updatedItem[index] = obj;
      } else {
        updatedItem = state.item.concat(action.item);
      }
      console.log(action.item.prize);

      updatedTotalAmount =
        state.totalAmount + action.item.amount * action.item.prize;
      individualAmount = state.totalAmount + action.item.productAmount;

      return {
        item: updatedItem,
        totalAmount: updatedTotalAmount,
        productAmount: individualAmount,
      };
    }
    if (action.type === "Remove") {
      console.log("remove");
      const index = state.item.findIndex((item) => {
        return item.id == action.item.id;
      });
      if (state.item[index].amount > 1) {
        console.log("A", state.item.productAmount);

        console.log("remove", index);
        const ex = state.item[index];
        console.log("remove", ex);
        let updateItem = {
          id: ex.id,
          amount: ex.amount - action.item.amount,
          name: ex.name,
          prize: ex.prize,
          productAmount: ex.productAmount - action.item.productAmount,
        };

        let updateItms = [...state.item];
        updateItms[index] = updateItem;
        const TotalAmount =
          state.totalAmount + action.item.amount * action.item.prize;
        const individualAmount = state.totalAmount - action.item.productAmount;

        return {
          item: updateItms,
          totalAmount: TotalAmount,
          productAmount: individualAmount,
        };
      } else {
        let updat = state.item.filter((meal) => {
          return meal.id != action.item.id;
        });

        return {
          item: updat,
          totalAmount: 0,
          productAmount: 0,
        };
      }
    }
  };

  const [AdditemtoCart, dispatch] = useReducer(cartReducer, intialStage);
  const addItemHandler = (item) => {
    console.log("its me", item.id);
    dispatch({
      type: "Add",
      item: item,
    });
  };
  const removerItemHandler = (item) => {
    dispatch({
      type: "Remove",
      item: item,
    });
  };
  const Cart = {
    item: AdditemtoCart.item,
    totalAmount: AdditemtoCart.totalAmount,
    addItem: addItemHandler,
    removeItem: removerItemHandler,
  };
  return (
    <CartContext.Provider value={Cart}>{props.children}</CartContext.Provider>
  );
};

export default ContextProvider;
