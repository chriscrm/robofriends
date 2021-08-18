import React from "react";

const MainTitle = (props) => {
  return (
    <div className="tc">
      <h1>Main Title</h1>
      <p>{props.greeting}</p>
    </div>
  );
};

export default MainTitle;
