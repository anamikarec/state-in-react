import React, { useState } from "react";

const Message = () => {
  const [state, setState] = useState("Welcome Visitor");

  const changeMessage = () => {
    setState("Thank you for Subscribing.");
  };
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          changeMessage();
        }}
      >
        Subscribe
      </button>
    </div>
  );
};
export default Message;
