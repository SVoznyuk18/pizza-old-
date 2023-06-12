import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getOrders,
  increasePizzaAmountPlacedOrder,
  decreasePizzaAmountPlacedOrder,
  deletePizzaAmountPlacedOrder,
  changeOrderStatus,
} from 'ActionsRoot';
import { Orders } from 'ComponentsRoot';
import { Container } from 'StyledComponentsRoot';

const radioItems = ['ordered', 'cooking', 'preparing order', 'delivered', 'done'];

const Manager = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleIncreasePizzaAmount = (orderId) => {
    dispatch(increasePizzaAmountPlacedOrder(orderId));
  };

  const handleDecreasePizzaAmount = (orderId) => {
    dispatch(decreasePizzaAmountPlacedOrder(orderId));
  };

  const handleDeletePizzaAmount = (orderId) => {
    dispatch(deletePizzaAmountPlacedOrder(orderId));
  };

  const handleChangeOrderStatus = (orderId, orderStatus) => {
    dispatch(changeOrderStatus({ orderId, orderStatus }));
  };

  return (
    <Container>
      <Orders
        orders={orders}
        handleIncreasePizzaAmount={handleIncreasePizzaAmount}
        handleDecreasePizzaAmount={handleDecreasePizzaAmount}
        handleDeletePizzaAmount={handleDeletePizzaAmount}
        handleChangeOrderStatus={handleChangeOrderStatus}
        radioItems={radioItems}
      />
    </Container>
  );
};

export default Manager;
