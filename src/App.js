import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header"
import React from "react";
import Intro from "./Intro"
import Role from "./Role";

function App() {
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      <Header title="Last7" value={value} setValue={setValue}/>
      {value === 0 && <Home />}
      {value === 1 && <Intro />}
      {value === 2 && <Role />}
    </React.Fragment>
  );
}

export default App;
