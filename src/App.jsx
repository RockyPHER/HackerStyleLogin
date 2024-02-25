import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Background from "./components/background/background";
import Login from "./components/login/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Background />
      <Login />
    </>
  );
}

export default App;
