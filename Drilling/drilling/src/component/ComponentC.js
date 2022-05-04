import React from "react";
import { useConsumer } from "../context/Context";
import ComponentD from "./ComponentD";

function ComponentC(props) {
  return (
    <h1>
      <div className="ComponentC" align="center">
        {/* <useConsumer>
          {(data) => {
            return <p>{data}</p>;
          }}
        </useConsumer> */}
        {props.uname}
      </div>
    </h1>
  );
}

export default ComponentC;
