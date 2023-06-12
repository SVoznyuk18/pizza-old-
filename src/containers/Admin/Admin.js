import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getManagers,
  // deleteManager,
  getOrders,
  getPizzaRequest,
  increasePizzaAmountPlacedOrder,
  decreasePizzaAmountPlacedOrder,
  deletePizzaAmountPlacedOrder,
  changeOrderStatus,
} from 'ActionsRoot';
import {
  Tabs,
  ManagersList,
  Orders,
  AddNewProduct,
} from 'ComponentsRoot';
import { Container } from 'StyledComponentsRoot';

const header = ['name', 'email', 'phone', 'userAvatar', 'role', 'tools'];
const radioItems = ['ordered', 'cooking', 'preparing order', 'delivered', 'done'];

const Admin = () => {
  const dispatch = useDispatch();
  const { managers, loadingManager } = useSelector((state) => state?.users);
  const { orders } = useSelector((state) => state.orders);
  const { pizza, pizzaLoading, pizzaError } = useSelector((state) => state.pizza);

  useEffect(() => {
    dispatch(getManagers());
    dispatch(getOrders());
    dispatch(getPizzaRequest());
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
      <Tabs
        tabs={
          [
            {
              id: 0,
              label: 'Managers',
              content: <ManagersList
                headerArr={header}
                managers={managers}
                loadingManager={loadingManager}
              />,
            },
            {
              id: 1,
              label: 'Add New Product',
              content: <AddNewProduct
                pizza={pizza}
                pizzaLoading={pizzaLoading}
                pizzaError={pizzaError}
              />,
            },
            {
              id: 2,
              label: 'Orders',
              content: <Orders
                orders={orders}
                handleIncreasePizzaAmount={handleIncreasePizzaAmount}
                handleDecreasePizzaAmount={handleDecreasePizzaAmount}
                handleDeletePizzaAmount={handleDeletePizzaAmount}
                handleChangeOrderStatus={handleChangeOrderStatus}
                radioItems={radioItems}
              />,
            },
          ]
        }
      />
    </Container>
  );
};

export default Admin;
