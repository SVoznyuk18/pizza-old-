import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  increasePizzaAmount,
  decreasePizzaAmount,
  deletePizzaItem,
  clearCart,
  toggleModal,
} from 'ActionsRoot';
import { CartItem, SvgIcon, BassicButton } from 'ComponentsRoot';
// eslint-disable-next-line import/no-unresolved
import { Container, Content } from 'StyledComponentsRoot';
import { MODAL } from 'ConfigsRoot/constants';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import {
  CartTitle,
  CartTop,
  CartList,
  CartBottom,
  CartBottomDetails,
  CartButtonSection,
  ClearCart,
} from './StyledComponents';

const Cart = () => {
  const { cart, totalPrice, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onIncPizzaAmount = (item) => {
    dispatch(increasePizzaAmount(item));
  };

  const onDecPizzaAmount = (item) => {
    dispatch(decreasePizzaAmount(item));
  };

  const onDeletePizzaItem = (item) => {
    dispatch(deletePizzaItem(item));
  };

  return (
    <Content>
      <Container>
        <CartTop>
          <CartTitle>{t('cart')}</CartTitle>
          <ClearCart onClick={() => dispatch(clearCart())}>
            <SvgIcon
              width="20"
              height="20"
              viewBox="0 0 20 20"
              path={iconSvg.trash}
              fill="#fff"
              strokeHover="#373737"
              stroke="#B6B6B6"
            />
            <span>{t('cleanCart')}</span>
          </ClearCart>
        </CartTop>
        <CartList>
          {cart.map((item, index) => (
            <CartItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              data={item}
              onIncPizzaAmount={() => onIncPizzaAmount(item)}
              onDecPizzaAmount={() => onDecPizzaAmount(item)}
              onDeletePizzaItem={() => onDeletePizzaItem(item)}
            />
          ))}
        </CartList>
        <CartBottom>
          <CartBottomDetails>
            <span>
              {' '}
              {t('amoutPizzas')}
              {' '}
              <b>{t('common.amount', { amount: totalAmount })}</b>
              {' '}
            </span>
            <span>
              {' '}
              {t('orderPrice')}
              <b>{t('common.cost', { cost: totalPrice })}</b>
              {' '}
            </span>
          </CartBottomDetails>
          <CartButtonSection>
            <Link to="/">
              <BassicButton
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="16px"
                padding="16px"
                minWidth="120px"
                color="#CACACA"
                hoverColor="232323"
                backgroundColor="#FFFFFF"
                hoverBackgroundColor="#f6f6f6"
                borderColor="#D3D3D3"
                hoverBorderColor="#f6f6f6"
                fontWeight={600}
              >
                {t('button.back')}
              </BassicButton>
            </Link>
            <BassicButton
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="16px"
              padding="16px"
              minWidth="120px"
              color="#FFFFFF"
              hoverColor="#232323"
              backgroundColor="#FE5F1E"
              hoverBackgroundColor="#FFFFFF"
              hoverBorderColor="#FE5F1E"
              fontWeight={600}
              disabled={cart.length === 0}
              onClick={() => dispatch(toggleModal(true, MODAL.ORDER_FORM))}
            >
              {t('button.checkout')}
            </BassicButton>
          </CartButtonSection>
        </CartBottom>
      </Container>
    </Content>
  );
};

export default memo(Cart);
