import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header/Header";
import Content from "./containers/Content/Content";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route exact path="/" component={Content} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
