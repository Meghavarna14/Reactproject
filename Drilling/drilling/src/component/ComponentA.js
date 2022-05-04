import React, { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA(props) {
  return (
    <div className="ComponentA">
      <ComponentB uname={props.uname} />
    </div>
  );
}
export default ComponentA;
