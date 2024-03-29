import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getPizzaRequest, addPizzaToCart } from 'ActionsRoot';
import { filteredPizzaSelector, useWindowSize } from 'UtilsRoot';
import {
  breakPoints,
  CATEGORIES,
  AVALIABLE_TYPES,
  AVALIABLE_SIZES,
  SORT,
} from 'ConfigsRoot/constants';
import { colors } from 'ConfigsRoot/colors';
import {
  Categories,
  Sort,
  PizzaItem,
  Spiner,
  ErrorPage,
} from 'ComponentsRoot';
// eslint-disable-next-line import/no-unresolved
import { Container, Content } from 'StyledComponentsRoot';
import { ContentTop, MainTitle, ContentItems } from './StyledComponents';

const Main = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const size = useWindowSize();

  const { pizza, pizzaLoading, pizzaError } = useSelector((state) => state.pizza);
  const { activeCategory } = useSelector((state) => state.filters);
  const { sortBy } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getPizzaRequest());
  }, []);

  const filteredPizza = filteredPizzaSelector(pizza, activeCategory, sortBy);

  const handleAddPizzaToCart = (params) => {
    dispatch(addPizzaToCart(params));
  };

  return (
    <Content>
      <Container>
        <ContentTop>
          <Categories
            handleDispatch={dispatch}
            categories={CATEGORIES}
            activeCategory={activeCategory}
            filterView={size?.width > breakPoints.TABLET_L ? 'default' : 'popUp'}
          />
          <Sort
            handleDispatch={dispatch}
            sort={SORT}
            activeSort={sortBy}
          />
        </ContentTop>
        <MainTitle>{t(`categoriesPizza.${activeCategory}`)}</MainTitle>
        <Choose>
          <When condition={pizzaLoading === true && pizzaError === false}>
            <Spiner
              width="200px"
              height="200px"
              viewBox="0 0 100 100"
              fill={colors.orange}
              style={{ margin: '0 auto', background: 'none', display: 'block' }}
            />
          </When>
          <When condition={pizzaLoading === false && pizzaError === false && !!filteredPizza.length}>
            <ContentItems>
              {filteredPizza && filteredPizza.map((pizzaItem) => (
                <PizzaItem
                  key={pizzaItem.id}
                  pizzaItem={pizzaItem}
                  avaliableTypes={AVALIABLE_TYPES}
                  avaliableSizes={AVALIABLE_SIZES}
                  handleAddPizzaToCart={handleAddPizzaToCart}
                />
              ))}
            </ContentItems>
          </When>
          <Otherwise>
            <ErrorPage />
          </Otherwise>
        </Choose>
      </Container>
    </Content>
  );
};

export default Main;
