import React from "react";
import Greetings from "./Components/Greetings";
import Toggle from "./Components/Toggle";

const App = (name) => {
  return (
    <div>
      <Greetings name="Ritik" />
      <Toggle />
    </div>
  );
};

export default App;
