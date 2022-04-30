import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  return (
    <div className="ComponentB">
      <ComponentC uname={props.uname} />
    </div>
  );
}

export default ComponentB;
