import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { increasePizzaAmount, decreasePizzaAmount, deletePizzaItem, clearCart, handleToggleModal } from '../redux/actions';
import { Content, ContainerCart, CartTitle, CartTop, ContentItems, CartBottom, CartBottomDetails, CartButtonSection, IconCustom, ClearCart } from './StyledComponents';
import { CartItem, SVG, BassicButton } from '../components/index';

import { MODAL } from '../configs/constants';
import iconSvg from '../assets/svg/iconSvg';

const Cart = () => {

    const { cart, totalPrice, totalAmount } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onIncPizzaAmount = (item) => {
        dispatch(increasePizzaAmount(item));
    }

    const onDecPizzaAmount = (item) => {
        dispatch(decreasePizzaAmount(item));
    }

    const onDeletePizzaItem = item => {
        dispatch(deletePizzaItem(item));
    }

    return (
        <Content>
            <ContainerCart>
                <CartTop>
                    <CartTitle>
                        {t('cart')}
                    </CartTitle>
                    <ClearCart onClick={() => dispatch(clearCart())}>
                        <IconCustom
                            width='20'
                            height='20'
                            fill='#fff'
                            strokeHover='#373737'
                            stroke='#B6B6B6'
                        >
                            <SVG
                                width='20'
                                height='20'
                                viewBox='0 0 20 20'
                                path={iconSvg.trash}
                            />
                        </IconCustom>
                        <span>{t('cleanCart')}</span>
                    </ClearCart>
                </CartTop>
                <ContentItems>
                    {
                        cart.map((item, index) => {
                            return <CartItem key={index} cartItem={item} onIncPizzaAmount={onIncPizzaAmount} onDecPizzaAmount={onDecPizzaAmount} onDeletePizzaItem={onDeletePizzaItem} />
                        })
                    }
                </ContentItems>
                <CartBottom>
                    <CartBottomDetails>
                        <span> {t('amoutPizzas')} <b>{`${totalAmount} ${t('common.piece')}`}</b> </span>
                        <span> {t('orderPrice')} <b>{`${totalPrice} ₽`}</b> </span>
                    </CartBottomDetails>
                    <CartButtonSection>
                        <Link to="/">
                            <BassicButton
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                fontSize='16px'
                                padding='16px'
                                minWidth='120px'
                                color='#CACACA'
                                hoverColor='#232323'
                                backgroundColor='#FFFFFF'
                                hoverBackgroundColor='#f6f6f6'
                                borderColor='#D3D3D3'
                                hoverBorderColor='#f6f6f6'
                                fontWeight={600}
                            >
                                {t('button.back')}
                            </BassicButton>
                        </Link>
                        <BassicButton
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            fontSize='16px'
                            padding='16px'
                            minWidth='120px'
                            color='#FFFFFF'
                            hoverColor='#232323'
                            backgroundColor='#FE5F1E'
                            hoverBackgroundColor='#FFFFFF'
                            hoverBorderColor='#FE5F1E'
                            fontWeight={600}
                            onClick={() => dispatch(handleToggleModal(true, MODAL.ORDER_FORM))}
                        >
                            {t('button.checkout')}
                        </BassicButton>
                    </CartButtonSection>
                </CartBottom>
            </ContainerCart>
        </Content>
    )
}

export default memo(Cart);