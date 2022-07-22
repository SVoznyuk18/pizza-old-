import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPizza } from '../redux/actions/pizza';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaItem from '../components/PizzaItem';

const Main = () => {

    const dispatch = useDispatch();
    const {pizza} = useSelector(state => state.pizza);

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
                    {pizza.map(item => {
                        return <PizzaItem key={item.id} pizzaItem={item}/>
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Main;