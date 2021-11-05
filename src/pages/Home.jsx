import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { PizzaLoadingBlock } from "../components/PizzaLoadingBlock";
import { SortPopup } from "../components/SortPopup";
import { addPizzaToCartAC, cartReducer } from "../redux/reducers/cart";
import { setCategoryAC, setSortByAC } from "../redux/reducers/filters";
import { fetchPizzas } from "../redux/reducers/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "Популярности", type: "popular", order: "desc" },
  { name: "Цене", type: "price", order: "desc" },
  { name: "Алфавиту", type: "name", order: "asc" },
];

export const Home = () => {
  const dispatch = useDispatch();
  const itemsPizza = useSelector((state) => state.pizzas.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategoryAC(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortByAC(type));
  }, []);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [sortBy, category]);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCartAC(obj))
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? itemsPizza.map((obj) => (
              <PizzaBlock
                key={obj.id}
                onClickAddPizza={handleAddPizzaToCart}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} //кол-во пицц по каждому id
                {...obj}
              />
            ))
          : Array(10)
              .fill()
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
        {/*   {
          Array(10).fill(<PizzaLoadingBlock />)
        } */}
      </div>
    </div>
  );
};
