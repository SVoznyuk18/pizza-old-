import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Img from '../../components/Img/Img';
import BassicButton from '../BassicButton/BassicButton';
import {HeaderWrapper, HeaderContainer, HeaderLogoWrapper, HeaderLogoDescription, HeaderTitle, HeaderSubTitle} from './StyledComponents';

import logoSvg from '../../assets/svg/pizza-logo.svg';
import cartSvg from '../../assets/svg/cart.svg';


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
        <HeaderWrapper>
            <HeaderContainer>
                <Link to="/">
                    <HeaderLogoWrapper>
                        <Img width="38px" src={logoSvg} alt="Pizza logo" />
                        <HeaderLogoDescription>
                            <HeaderTitle>React Pizza</HeaderTitle>
                            <HeaderSubTitle>самая вкусная пицца во вселенной</HeaderSubTitle>
                        </HeaderLogoDescription>
                    </HeaderLogoWrapper>
                </Link>
                <Link to={"/cart"}>
                    <BassicButton
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="175px"
                        padding="12px 25px"
                        backgroundColor="#fe5f1e"
                    > 
                        <span>{`${totalPrice(cart)} ₽`}</span>
                        <div className="button__delimiter"></div>
                        <Img 
                            src={cartSvg} 
                            alt="cart icon" 
                            width="18px" 
                            margin="0px 8px 1px 0px"
                        />
                        <span>{totalAmount(cart)}</span>
                    </BassicButton>
                </Link>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default memo(Header);