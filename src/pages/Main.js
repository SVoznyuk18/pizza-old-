import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { getPizza } from '../redux/actions/pizza';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaItem from '../components/PizzaItem';

const Main = () => {

    const filteredPizzaSelector = createSelector(
        state => state.pizza.pizza,
        state => state.filters.idActiveCategory,
        //state => state.filters.sortBy,
        (pizza, category, /* sortBy */) => {
           
         /*    if (category === 0) {
                pizzaFiltered = pizza;
            } */
            /* if (sortBy === "популярности") {
                return pizza.sort((a, b) =>{
                  return a.rating - b.rating
                });              
            }
             else if (sortBy === "цене") {
                return pizza.sort((a, b) => {
                    return a.price - b.price;
                });
            } 
            else if(sortBy === "алфавиту") {
                return pizza.sort((a, b) => {
                    return a.name - b.name
                });
            } else {
                pizzaFiltered = pizza;
            }

            
            return pizzaFiltered; */
            if (category === 0) {
                return pizza
                
            } else {
                return pizza.filter(item => item.category === category);
            }
        }
    )

    const filteredPizza = useSelector(filteredPizzaSelector);
    const dispatch = useDispatch();
    const { pizza } = useSelector(state => state.pizza);

    useEffect(() => {
        dispatch(getPizza());
    }, [dispatch])

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {filteredPizza.map(item => {
                        return <PizzaItem key={item.id} pizzaItem={item} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default Main;