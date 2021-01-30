import React from "react";

const userOutput = (props) => {
  const style = {
    width: "60%",
    margin: "auto",
    border: "1px solid blue",
    marginTop: "100px",
    padding: "8px",
  };

  return (
    <div style={style}>
      <p>I'm {props.name}</p>
    </div>
  );
};

export default userOutput;
