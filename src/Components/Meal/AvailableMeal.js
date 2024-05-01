import MealItem from "./MealItem";
import classes from "./AvailableMeal.module.css";
const AvailableMeal = () => {
  const dummyMeal = [
    {
      id: 1,
      name: "Sushi",
      description: "Finest And Tast Fish !",
      prize: 220.443,
    },
    {
      id: 2,
      name: "Mutton Karahi",
      description: "Feel The Desi ChatKhara And Enjoyed It !",
      prize: 330.443,
    },
    {
      id: 3,
      name: "Biyani",
      description: "Let The Spicy Biryani Full with spice and salts, chicken !",
      prize: 400.443,
    },
    {
      id: 4,
      name: " Chiken Stack",
      description:
        "Juicy And Salty stack that fills Your Need ,Make you Happy !",
      prize: 500.443,
    },
    {
      id: 5,
      name: "Zinger Shuwarma",
      description:
        "Finest And Tast Zinger With big Two Slices and Enjoyed them !",
      prize: 100.443,
    },
  ];

  return (
    <div className={classes.box}>
      {dummyMeal.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            prize={meal.prize}
          ></MealItem>
        );
      })}
    </div>
  );
};

export default AvailableMeal;
