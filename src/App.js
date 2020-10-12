import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header/Header";
import Content from "./containers/Content/Content";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route exact path="/" component={Content} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
