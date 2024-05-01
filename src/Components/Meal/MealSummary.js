import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <div className={`text-center ${classes.MealSummary}`}>
      <h1>Delicious Food ,Delivery To You</h1>
      <p className="mt-5">
        Food is one of the basic necessities of life. Food contains
        nutrients—substances essential for the growth, repair, and maintenance
        of body tissues and for the regulation of vital processes.
      </p>
      <p>
        A man straightens his rich vegetable stand in the busy market town of
        Chichicastenango, Guatemala. Vegetables are one of the most important
        foods in any diet. Vegetables alone provide nearly all the nutrients
        people need to survive.
      </p>
    </div>
  );
};
export default MealSummary;
