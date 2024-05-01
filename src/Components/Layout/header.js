import { Fragment } from "react";
import Foodimg from "../Assets/food.jpg";
import classes from "./header.module.css";
import CartButton from "./CartButton";
const Header = (props) => {
  return (
    <Fragment>
      <div className={classes["header-Up"]}>
        <div className={classes.header}>
          <h1>Food Meal</h1>
          <CartButton onClick={props.model}></CartButton>
        </div>
      </div>
      <div className={classes["hed-img"]}>
        <img className={classes.img} src={Foodimg} alt="Image Of Fast Food" />
      </div>
    </Fragment>
  );
};
export default Header;
