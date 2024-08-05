import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Legal from "./components/Legal";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/legal" component={Legal} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
