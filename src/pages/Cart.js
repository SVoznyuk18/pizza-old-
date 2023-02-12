import { Link } from 'react-router-dom';
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incPizzaAmount, decPizzaAmount, deletePizzaItem, cleanCart } from '../redux/actions/cart';
import { Content, ContainerCart, CartTitle, CartTop, ContentItems, CartBottom, CartBottomDetails, CartButtonSection, IconCustom, ClearCart } from './StyledComponents';
import { CartItem, SVG, BassicButton } from '../components/index';

import iconSvg from '../assets/svg/iconSvg';

const Cart = () => {

    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalPrice = (arrCart) => {
        let total;
        if (arrCart.length === 0) {
            total = 0;
            return total;
        } else {
            total = arrCart.reduce((accum, item) => {
                return accum + item.price * item.amountPizzas;
            }, 0)
            return total;
        }
    }

    const totalAmount = (arrCart) => {
        let total;
        if (arrCart.length === 0) {
            total = 0;
            return total;
        } else {
            total = arrCart.reduce((accum, item) => {
                return accum + item.amountPizzas;
            }, 0)
            return total;
        }
    }

    const onIncPizzaAmount = (item) => {
        const newItem = {
            id: item.id,
            amountPizzas: item.amountPizzas + 1
        }
        dispatch(incPizzaAmount(newItem));
    }

    const onDecPizzaAmount = (item) => {
        if (item.amountPizzas !== 0) {
            const newItem = {
                id: item.id,
                amountPizzas: item.amountPizzas - 1
            }
            dispatch(decPizzaAmount(newItem))
        } else {
            dispatch(deletePizzaItem(item))
        }
    }

    const onDeletePizzaItem = id => {
        dispatch(deletePizzaItem(id))
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
                        <ClearCart onClick={() => dispatch(cleanCart())}>
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
                            <span> Всего пицц: <b>{`${totalAmount(cart)} шт.`}</b> </span>
                            <span> Сумма заказа: <b>{`${totalPrice(cart)} ₽`}</b> </span>
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