import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Detalle from "./components/Detalle";
import MenuDeOpciones from "./components/MenuDeOpciones";
import Agrupados from "./components/Agrupados";

class App extends Component {
  render() {
    return (
      <div>
        <MenuDeOpciones></MenuDeOpciones>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/detalleZodiaco/:id" component={Detalle}></Route>
          <Route path="/home/:type/:signo" component={Home}></Route>
          <Route path="/agrupados" component={Agrupados}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
