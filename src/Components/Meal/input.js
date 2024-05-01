import mealItem from "./MealItem";
import React from "react";

const Input1 = React.forwardRef((prop, ref) => {
  return (
    <form>
      <label htmlFor="prop.input.id" className="text-light mx-1">
        {prop.label}
      </label>
      <input
        ref={ref}
        className="border border-white rounded-pill px-2"
        {...prop.input}
      ></input>
    </form>
  );
});
export default Input1;
