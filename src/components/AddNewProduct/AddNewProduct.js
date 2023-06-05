import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { toggleModal } from 'ActionsRoot';
import { MODAL, AVALIABLE_TYPES, AVALIABLE_SIZES } from 'ConfigsRoot/constants';
// eslint-disable-next-line import/no-cycle
import { PizzaItem, EmptyProductCard } from 'ComponentsRoot';
import { Wrapper } from './StyledComponents';

const AddNewProduct = ({ pizza, pizzaLoading, pizzaError }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {pizza.length && pizza.map((item) => (
        <PizzaItem
          key={item.id}
          pizzaItem={item}
          avaliableTypes={AVALIABLE_TYPES}
          avaliableSizes={AVALIABLE_SIZES}
          editProduct
        />
      ))}
      <EmptyProductCard
        handleOpenModal={
          () => dispatch(toggleModal(true, MODAL.ADD_NEW_PRODUCT))
        }
      />
    </Wrapper>
  );
};

AddNewProduct.propTypes = {
  pizza: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    sizes: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  pizzaLoading: PropTypes.bool,
  pizzaError: PropTypes.bool,
};

AddNewProduct.defaultProps = {
  pizzaLoading: false,
  pizzaError: false,
};

export default memo(AddNewProduct);
