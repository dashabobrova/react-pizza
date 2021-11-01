import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { setPizzasAC } from "./redux/reducers/pizzas";

function App() {
  const dispatch = useDispatch();

  //для проверки перерисовки
  /* window.test = () => {
    axios.get("http://localhost:3000/db.json")
      .then((res) => {
      dispatch(setPizzasAC(res.data.pizzas));
    });
  } */

  useEffect(() => {
    /* fetch('http://localhost:3000/db.json').then((res) => res.json()).then(json => {setPizzas(json.pizzas)}); */
    axios.get("http://localhost:3001/pizzas")
      .then((res) => {
      dispatch(setPizzasAC(res.data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
