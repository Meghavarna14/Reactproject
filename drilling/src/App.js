import { useState } from "react";
import ComponentA from "./component/ComponentA";
import ComponentC from "./component/ComponentC";
import { useProvider } from "./context/Context";

function App() {
  const [uname, setUname] = useState("GOOGLE");
  return (
    <div className="App" align="center">
      <h1>
        {uname}
        <useProvider value={uname}>
          <ComponentC uname={uname} />
          <button onClick={() => setUname("FLIPCART")}>UPDATE</button>
        </useProvider>
      </h1>
    </div>
  );
}
export default App;
