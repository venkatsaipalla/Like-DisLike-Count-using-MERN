import React from "react";
import "./App.css";
import LikesDislikes from "./components/LikesDslikes";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>;
const App = () => {
  return (
    <header>
     <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
      rel="stylesheet"></link>;
      <div className="full-screen" target="_blank">
        <LikesDislikes />
      </div>
    </header>
  );
};

export default App;
