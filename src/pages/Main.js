import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPizza } from '../redux/actions/pizza';
import { Categories, Sort, PizzaItem, Spiner, ErrorMessage } from '../components/index';
import { Content, Container, ContentTop, MainTitle, ContentItems } from './StyledComponents';

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
            return <ContentItems>
                {filteredPizza.map(item => {
                    return <PizzaItem key={item.id} pizzaItem={item} />
                })}
            </ContentItems>
        } else {
            return <ErrorMessage />
        }
    }

    const element = renderPizza();
    return (
        <Content>
            <Container>
                <ContentTop>
                    <Categories handleDispatch={dispatch} />
                    <Sort />
                </ContentTop>
                <MainTitle> {`${categories[idActiveCategory]} пиццы`}</MainTitle>

                {element}
            </Container>
        </Content>
    )
}

export default Main;