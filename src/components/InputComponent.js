import React, { useState } from "react";

export const InputComponents = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label><br/>

      <input
        id="nameInput"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {text && <h2>Hello, {text}!</h2>}
    </div>
  );
};

export default InputComponents;
