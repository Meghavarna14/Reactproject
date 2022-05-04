import React, { useState, useEffect } from "react";
function FetchData() {
  const [fetchData, setData] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts") //this link we got it from jsonplaceholder (fake api)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>REACT FETCH API DATA</h1>
      {fetchData.map((v, i) => {
        console.log(v);
        return (
          <li key={i}>
            {v.id} {v.title}{" "}
          </li>
        );
      })}
    </div>
  );
}
export default FetchData;
