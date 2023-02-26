import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import { getPizzaRequest } from '../redux/actions';
import { filteredPizzaSelector } from '../utils';
import { breakPoints, CATEGORIES, AVALIABLE_TYPES, AVALIABLE_SIZES, SORT } from '../configs/constants';

import { Categories, Sort, PizzaItem, Spiner, ErrorPage } from '../components';
import { Content, Container, ContentTop, MainTitle, ContentItems } from './StyledComponents';

const Main = ({ screenWidth }) => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { pizza, pizzaLoading, pizzaError } = useSelector(state => state.pizza);
    const { idActiveCategory } = useSelector(state => state.filters);
    const { sortBy } = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(getPizzaRequest());
    }, [dispatch]);

    const filteredPizza = filteredPizzaSelector(pizza, idActiveCategory, sortBy);

    return (
        <Content>
            <Container>
                <ContentTop>
                    <Categories handleDispatch={dispatch} categories={CATEGORIES} filterView={screenWidth > breakPoints.TABLET_L ? 'default' : 'popUp'} />
                    <Sort sort={SORT}/>
                </ContentTop>
                <MainTitle>{t(`categoriesPizza.${CATEGORIES[idActiveCategory]}`)}</MainTitle>
                <Choose>
                    <When condition={pizzaLoading === true && pizzaError === false}>
                        <Spiner />
                    </When>
                    <When condition={pizzaLoading === false && pizzaError === false && !!filteredPizza.length}>
                        <ContentItems>
                            {filteredPizza && filteredPizza.map(item => {
                                return <PizzaItem key={item.id} pizzaItem={item} avaliableTypes={AVALIABLE_TYPES} avaliableSizes={AVALIABLE_SIZES} />
                            })}
                        </ContentItems>
                    </When>
                    <Otherwise>
                        <ErrorPage />
                    </Otherwise>
                </Choose>
            </Container>
        </Content>
    );
}

export default Main;