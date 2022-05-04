import React, { useEffect, useState } from "react";

function Useeffect() {
  useEffect(() => {
    document.title = `YOU CLICKED ${count} TIMES`;
  });
  const [count, setCount] = useState(1);
  return (
    <div align="center">
      <button onClick={() => setCount(count + 1)}>CLICKED {count}</button>
    </div>
  );
}
export default Useeffect;
