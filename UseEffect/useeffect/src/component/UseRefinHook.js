import React, { useRef, useEffect } from "react";

function UseRefinHook() {
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
    //This will make the cursor to point in that input field
  }, []);

  return (
    <div>
      <input ref={input} type="text" />
    </div>
  );
}

export default UseRefinHook;
