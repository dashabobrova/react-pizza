import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { SortPopup } from "../components/SortPopup";
import { setCategoryAC } from "../redux/reducers/filters";

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { name: "Популярности", type: "popular" },
  { name: "Цене", type: "price" },
  { name: "Алфавиту", type: "alphabet" },
];

export const Home = () => {
  const dispatch = useDispatch();
  const itemsPizza = useSelector((state) => state.pizzas.items);
  
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategoryAC(index))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {itemsPizza.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};
