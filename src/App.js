import React from "react";
import { Route } from "react-router";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

function App() {
  //для проверки перерисовки
  /* window.test = () => {
    axios.get("http://localhost:3000/db.json")
      .then((res) => {
      dispatch(setPizzasAC(res.data.pizzas));
    });
  } */

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
