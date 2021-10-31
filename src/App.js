import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import store from './redux/store';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    /* fetch('http://localhost:3000/db.json').then((res) => res.json()).then(json => {setPizzas(json.pizzas)}); */
    axios
      .get("http://localhost:3000/db.json")
      .then((res) => setPizzas(res.data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
