import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// import { getOrders } from 'ActionsRoot';
// eslint-disable-next-line import/no-cycle
import { Accordion, CartItem } from 'ComponentsRoot';
import {
  OrdersContainer,
  Order,
  OrderInfoSection,
  OrderInfoItem,
  OrderCartSection,
  OrderPriceSection,
} from './StyledComponents';

const Orders = ({ orders }) => {
  // const dispatch = useDispatch();
  const { t } = useTranslation();
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

Orders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    clientInfo: PropTypes.shape({
      house: PropTypes.string,
      apartment: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      time: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.shape({
        seconds: PropTypes.number,
        nanoseconds: PropTypes.number,
      }),
      street: PropTypes.string,
    }),
    orderId: PropTypes.string,
    orderInfo: PropTypes.shape({
      order: PropTypes.arrayOf(PropTypes.shape({
        amountPizzas: PropTypes.number,
        imageUrl: PropTypes.string,
        price: PropTypes.number,
        type: PropTypes.string,
        size: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
      })),
      totalAmount: PropTypes.number,
      orderStatus: PropTypes.string,
      totalPrice: PropTypes.number,
    }),
  })).isRequired,
};

export default memo(Orders);
