import classes from "./CartButton.module.css";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
const CartButton = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = ctx.item.reduce((currV, arrV) => {
    return currV + arrV.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.pad}>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"
          alt="shopping-cart--v1"
        />
      </span>
      <span className={classes.pad}>Your Cart</span>
      <span className={classes.pad}>{totalAmount}</span>
    </button>
  );
};
export default CartButton;
