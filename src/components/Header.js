import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IconSVG from '../components/IconSVG/IconSVG';

import logoSvg from '../assets/svg/pizza-logo.svg';
import cartSvg from '../assets/svg/cart.svg';


const Header = () => {

    const {cart} = useSelector(state => state.cart);
    
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

    return (
        <div className="header">
            <div className="container">
                <Link to="/" className="header__logo">
                    <img width="38" src={logoSvg} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </Link>
                <div  className="header__cart">
                    <Link to={"/cart"} className="button button--cart">
                        <span>{`${totalPrice(cart)} ₽`}</span>
                        <div className="button__delimiter"></div>
                        <IconSVG 
                            src={cartSvg} 
                            alt="cart icon" 
                            width="18px" 
                            margin="0px 8px 1px 0px"
                        />
                        <span>{totalAmount(cart)}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default memo(Header);