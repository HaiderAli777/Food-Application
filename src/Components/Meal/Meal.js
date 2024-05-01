import MealSummary from "./MealSummary";
import { Fragment } from "react";
import AvailableMeal from "./AvailableMeal";
const Meal = () => {
  return (
    <Fragment>
      <MealSummary></MealSummary>
      <AvailableMeal></AvailableMeal>
    </Fragment>
  );
};

export default Meal;
