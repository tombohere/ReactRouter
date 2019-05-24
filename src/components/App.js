import React from "react";
import Main from "./Main";
import Header from "./Header";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    // Creating Global Variable.
    global.SampleVar = "This is Global Variable.";
    global.count = 0;
  }

  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>
        <div className="main-content">
          <section>
            <Main />
          </section>
        </div>
        <footer>
          <Header />
        </footer>
        <div className="lside" />
        <div className="rside" />
      </div>
    );
  }
}

export default App;
