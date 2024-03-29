import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(`PuppyList: ${puppyList}`);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
