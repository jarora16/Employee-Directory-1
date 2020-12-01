import React from "react";
import Main from "./Components/Main/index";
import Wrapper from "./Components/Wrapper/index";
import Header from "./Components/Header/index";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
     </div>
   );
 }

export default App;