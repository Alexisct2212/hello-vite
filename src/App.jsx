import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello Vite!</h1>
      <p>This is your first Vite project</p>
    </>
  );
}

export default App;
