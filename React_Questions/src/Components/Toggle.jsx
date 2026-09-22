import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setisOn] = useState(false);
  return (
    <div>
      <button
        onClick={() => setisOn(!isOn)}
        style={{
          background: isOn ? "green" : "gray",
          color: "#fff",
          padding: "10px 20px",
          boxShadow: "none",
          border: "none",
        }}
      >
        {isOn ? "Toggled" : "Toggle"}
      </button>
    </div>
  );
};

export default Toggle;
