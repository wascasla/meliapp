import "./App.scss";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BoxSearch from "./screens/buscador/BoxSearch";
import Result from "./screens/resultado/Result";
import Detail from "./screens/detalle/Detail";
import "./App.scss";
import { useState } from "react";

function App() {
  const [paramSearch, setParamSearch] = useState("");
  const [categorias, setCategorias] = useState([]);

  return (
    <div className="App">
      <div>
        <Router>
          <Header paramSearch={paramSearch} setParamSearch={setParamSearch} />
          <Switch>
            <Route exact path="/">
              <BoxSearch setParamSearch={setParamSearch} />
            </Route>
            <Route path="/items">
              <Result categorias={categorias} setCategorias={setCategorias} />
            </Route>
            <Route path="/item/:id">
              <Detail categorias={categorias} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
