import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPizza } from '../redux/actions/pizza';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort';
import PizzaItem from '../components/PizzaItem/PizzaItem';
import Spiner from '../components/Spiner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

const Main = () => {
    const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
    const dispatch = useDispatch();
    const { pizza, pizzaLoading, pizzaError } = useSelector(state => state.pizza);
    const { idActiveCategory } = useSelector(state => state.filters);
    const { sortBy } = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(getPizza());
    }, [dispatch])


    const filteredPizzaSelector = (arrPizza, category, sort) => {
        let filteredPizza = arrPizza;
        if (category) {
            filteredPizza = filteredPizza?.filter(item => item.category === category);
        }
        if (sort === "популярности") {
            filteredPizza = filteredPizza?.sort((a, b) => {
                return b.rating - a.rating;
            })
        }
        if (sort === "цене") {
            filteredPizza = filteredPizza?.sort((a, b) => {
                return a.price - b.price;
            })
        }
        if (sort === "алфавиту") {
            filteredPizza = filteredPizza?.sort((a, b) => {
                return a.name[0].localeCompare(b.name[0])
            })
        }
        return filteredPizza;
    }
    const filteredPizza = filteredPizzaSelector(pizza, idActiveCategory, sortBy);

    const renderPizza = () => {
        if (pizzaLoading === true && pizzaError === false) {
            return <Spiner />
        } else if (pizzaLoading === false && pizzaError === false) {
            return <div className="content__items">
                {filteredPizza.map(item => {
                    return <PizzaItem key={item.id} pizzaItem={item} />
                })}
            </div>
        } else {
            return <ErrorMessage />
        }
    }

    const element = renderPizza();
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories handleDispatch={dispatch} />
                    <Sort />
                </div>
                <h2 className="content__title"> {`${categories[idActiveCategory]} пиццы`}</h2>
                
                {element}
            </div>
        </div>
    )
}

export default Main;