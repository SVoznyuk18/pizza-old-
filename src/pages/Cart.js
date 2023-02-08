import { Link } from 'react-router-dom';
import {memo} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incPizzaAmount, decPizzaAmount, deletePizzaItem, cleanCart } from '../redux/actions/cart';

import {IconCustom} from './StyledComponents';
import SVG from '../components/SVG/SVG';
import CartItem from '../components/CartItem/CartItem';

import iconSvg from '../assets/svg/iconSvg';

const Cart = () => {

    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalPrice = (arrCart) => {
        let total;
        if(arrCart.length === 0) {
            total = 0;
            return total;
        } else{
            total = arrCart.reduce((accum, item) => {
                return accum + item.price * item.amountPizzas;
            }, 0)
            return total;
        }
    }

    const totalAmount = (arrCart) =>{
        let total;
        if(arrCart.length === 0) {
            total = 0;
            return total;
        } else{
            total = arrCart.reduce((accum, item) => {
                return accum + item.amountPizzas;
            }, 0)
            return total;
        }
    }

    const onIncPizzaAmount = (item) => {
        console.log('test');
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
        } else{
            dispatch(deletePizzaItem(item))
        }
    }

    const onDeletePizzaItem = id => {
        dispatch(deletePizzaItem(id))
    }

    return (
        <div className="wrapper">
            <div className="content">
                <div className="container container--cart">
                    <div className="cart">
                        <div className="cart__top">
                            <h2 className="content__title">
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
                            </h2>
                            <div className="cart__clear">
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
                                {/* <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 5H4.16667H17.5"
                                        stroke="#B6B6B6"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                                        stroke="#B6B6B6"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.33337 9.16667V14.1667"
                                        stroke="#B6B6B6"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.6666 9.16667V14.1667"
                                        stroke="#B6B6B6"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg> */}
                                <span onClick={() => dispatch(cleanCart())}>Очистить корзину</span>
                            </div>
                        </div>
                        <div className="content__items">
                            {
                                cart.map((item, index) => {
                                    return <CartItem key={index} cartItem={item} onIncPizzaAmount={onIncPizzaAmount} onDecPizzaAmount={onDecPizzaAmount} onDeletePizzaItem={onDeletePizzaItem}/>
                                })
                            }
                        </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span> Всего пицц: <b>{`${totalAmount(cart)} шт.`}</b> </span>
                                <span> Сумма заказа: <b>{`${totalPrice(cart)} ₽`}</b> </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <Link to="/" className="button button--outline button--add go-back-btn">

                                    <span>Вернуться назад</span>
                                </Link>
                                <div className="button pay-btn">
                                    <span>Оплатить сейчас</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Cart);