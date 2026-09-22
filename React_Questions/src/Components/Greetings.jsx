import React from "react";

const Greetings = ({ name }) => {
  return (
    <div>
      <h2>Hello, {name || "Guest !"}</h2>
    </div>
  );
};

export default Greetings;
