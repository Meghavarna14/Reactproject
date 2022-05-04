import React, { useEffect, useState } from "react";
import axios from "axios";
function Axios() {
  const [fetchdata, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        //if data is there print in console
        console.log(res);
        setData(res.data); //we want to store only data
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h1>REACT FETCH API DATA BY HTTP METHOD USING AXIOS</h1>
      {fetchdata.map((v, i) => {
        console.log(v);
        return (
          <li key={i}>
            {v.id}
            {v.title}
          </li>
        );
      })}
    </div>
  );
}
export default Axios;
