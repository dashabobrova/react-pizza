import React from "react";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { SortPopup } from "../components/SortPopup";

export const Home = ( {items} ) => {

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["Популярности", "Цене", "Алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {
          items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
        }
      </div>
    </div>
  );
};
