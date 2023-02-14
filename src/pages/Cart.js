import { Link } from 'react-router-dom';
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {increasePizzaAmount, decreasePizzaAmount, deletePizzaItem, clearCart, handleToggleModal} from '../redux/actions';
import { Content, ContainerCart, CartTitle, CartTop, ContentItems, CartBottom, CartBottomDetails, CartButtonSection, IconCustom, ClearCart } from './StyledComponents';
import { CartItem, SVG, BassicButton } from '../components/index';

import {MODAL} from '../configs/constants';


import iconSvg from '../assets/svg/iconSvg';

const Cart = () => {

    const { cart, totalPrice, totalAmount } = useSelector(state => state.cart);
    const dispatch = useDispatch();

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
                        <IconCustom
                            width='100%'
                            height='100%'
                            fill='#fff'
                        >
                            <SVG
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                                path={iconSvg.cart}
                            />
                        </IconCustom>
                        Корзина
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
                        <span>Очистить корзину</span>
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
                        <span> Всего пицц: <b>{`${totalAmount} шт.`}</b> </span>
                        <span> Сумма заказа: <b>{`${totalPrice} ₽`}</b> </span>
                    </CartBottomDetails>
                    <CartButtonSection>
                        <Link to="/">
                            <BassicButton
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                fontSize='16px'
                                padding='16px'
                                width='210px'
                                color='#CACACA'
                                hoverColor='#232323'
                                backgroundColor='#FFFFFF'
                                hoverBackgroundColor='#f6f6f6'
                                borderColor='#D3D3D3'
                                hoverBorderColor='#f6f6f6'
                                fontWeight={600}
                            >
                                Вернуться назад
                            </BassicButton>
                        </Link>
                        <BassicButton
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            fontSize='16px'
                            padding='16px'
                            width='210px'
                            color='#FFFFFF'
                            hoverColor='#232323'
                            backgroundColor='#FE5F1E'
                            hoverBackgroundColor='#FFFFFF'
                            hoverBorderColor='#FE5F1E'
                            fontWeight={600}
                            onClick={() => dispatch(handleToggleModal(true, MODAL.ORDER_FORM))}
                        >
                            Вернуться назад
                        </BassicButton>
                    </CartButtonSection>
                </CartBottom>   
            </ContainerCart>
        </Content>
    )
}

export default memo(Cart);