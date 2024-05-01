import React, { useState } from "react";
import Header from "./Components/Layout/header";
import Meal from "./Components/Meal/Meal";
import Cart from "./Components/Cart/Cart";
import ContextProvider from "./store/ContextProvider";
function App() {
  const [shownModel, setShownModel] = useState(false);
  const ShowModel = () => {
    setShownModel(true);
  };
  const HideModel = () => {
    setShownModel(false);
  };
  return (
    <ContextProvider>
      <Header model={ShowModel}></Header>
      <Meal></Meal>
      {shownModel && <Cart hide={HideModel}></Cart>}
    </ContextProvider>
  );
}

export default App;
