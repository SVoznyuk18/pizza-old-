import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import { getPizzaRequest } from '../redux/actions';
import { filteredPizzaSelector } from '../utils';
import { breakPoints } from '../configs/constants';

import { Categories, Sort, PizzaItem, Spiner, ErrorPage } from '../components';
import { Content, Container, ContentTop, MainTitle, ContentItems } from './StyledComponents';

const Main = ({screenWidth}) => {

    const categories = ["all", "meat", "vegetarian", "grill", "spicy", "calzone"];
    const dispatch = useDispatch();

    const { pizza, pizzaLoading, pizzaError } = useSelector(state => state.pizza);
    const { idActiveCategory } = useSelector(state => state.filters);
    const { sortBy } = useSelector(state => state.filters);

    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getPizzaRequest());
    }, [dispatch]);

  
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
            return <ErrorPage />
        }
    }

    const element = renderPizza();

    return (
        <Content>
            <Container>
                <ContentTop>
                    <Categories handleDispatch={dispatch}  filterView= {screenWidth > breakPoints.TABLET_L ? 'default' : 'popUp' } />
                    <Sort />
                </ContentTop>
                <MainTitle>{t(`categoriesPizza.${categories[idActiveCategory]}`)}</MainTitle>
                {element}
            </Container>
        </Content>
    );
}

export default Main;