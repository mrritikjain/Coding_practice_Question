import React from "react";
import Greetings from "./Components/Greetings";
import Toggle from "./Components/Toggle";
import UserList from "./Components/UserList";

const App = (name) => {
  return (
    <div>
      <Greetings name="Ritik" />
      <Toggle />
      <UserList />
    </div>
  );
};

export default App;
