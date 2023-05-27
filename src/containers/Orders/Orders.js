import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getOrders } from 'ActionsRoot';
import { Accordion, CartItem } from 'ComponentsRoot';
import {
  OrdersContainer,
  Order,
  OrderInfoSection,
  OrderInfoItem,
  OrderCartSection,
  OrderPriceSection,
} from './StyledComponents';

const Orders = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <OrdersContainer>
      <Choose>
        <When condition={orders.length > 0}>
          {orders.map((order) => (
            <Accordion
              key={order?.orderId}
              header={[
                order?.clientInfo?.name,
                order?.clientInfo?.phone,
                order?.clientInfo?.email,
                order?.orderInfo?.orderStatus,
              ]}
            >
              <Order>
                <OrderInfoSection>
                  <OrderInfoItem>{`name: ${order?.clientInfo?.name}`}</OrderInfoItem>
                  <OrderInfoItem>{`phone: ${order?.clientInfo?.phone}`}</OrderInfoItem>
                  <OrderInfoItem>{`email: ${order?.clientInfo?.email}`}</OrderInfoItem>
                  <OrderInfoItem>{`delivery date ${order?.clientInfo?.time}`}</OrderInfoItem>
                  <OrderInfoItem>{`Adress ${order?.clientInfo?.street} street., ${order?.clientInfo?.house}, ${order?.clientInfo?.apartment}, ap`}</OrderInfoItem>
                </OrderInfoSection>
                <OrderCartSection>
                  {order?.orderInfo?.order.map((item, index) => (
                    <CartItem
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      data={item}
                      type="orders"
                      // onIncPizzaAmount={onIncPizzaAmount}
                      // onDecPizzaAmount={onDecPizzaAmount}
                      // onDeletePizzaItem={onDeletePizzaItem}
                    />
                  ))}
                </OrderCartSection>
                <OrderPriceSection>
                  <span>
                    {t('amoutPizzas')}
                    <b>
                      {t('common.amount', {
                        amount: order?.orderInfo?.totalAmount,
                      })}
                    </b>
                  </span>
                  <span>
                    {t('orderPrice')}
                    <b>
                      {t('common.cost', { cost: order?.orderInfo?.totalPrice })}
                    </b>
                  </span>
                </OrderPriceSection>
              </Order>
            </Accordion>
          ))}
        </When>
        <Otherwise />
      </Choose>
    </OrdersContainer>
  );
};

export default Orders;
