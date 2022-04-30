import React from "react";

function Home(props) {
  const gotToAbout = () => {
    props.history.push("/About");
  };
  return (
    <div>
      Home Page
      <button onClick={gotToAbout}> gotToAboutPage</button>
    </div>
  );
}

export default Home;
