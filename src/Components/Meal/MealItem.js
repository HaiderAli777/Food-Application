import AvailableMeal from "./AvailableMeal";
import classes from "./mealItem.module.css";
import Input1 from "./input";
import { useRef, useContext } from "react";
import CartContext from "../../store/CartContext";
const MealItem = (prop) => {
  const amount = useRef();
  const ctx = useContext(CartContext);

  const sumbitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amount.current.value;
    const finalValue = +enteredAmount;
    console.log(prop.id);
    ctx.addItem({
      id: prop.id,
      amount: finalValue,
      name: prop.name,
      prize: prop.prize,
      productAmount: finalValue,
    });
  };

  return (
    <div className={classes.div}>
      <div>
        <h3 className="text-light fw-bold">{prop.name}</h3>
        <h6 className="text-light fst-italic">{prop.description}</h6>
        <h6 className="text-danger fw-bold">${prop.prize.toFixed(2)}</h6>
      </div>

      <div>
        <Input1
          ref={amount}
          label="Amount"
          input={{
            id: prop.id,
            min: "1",
            max: "5",
            type: "number",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button
          onClick={sumbitHandler}
          type="button"
          class="btn btn-light my-2 rounded-pill px-5"
        >
          +Add
        </button>
      </div>
    </div>
  );
};
export default MealItem;
