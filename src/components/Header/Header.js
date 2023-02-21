import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Img, BassicButton, SVG } from '../index';
import { HeaderWrapper, HeaderContainer, HeaderLogoWrapper, HeaderLogoDescription, HeaderTitle, HeaderSubTitle, IconCustom, Delimiter } from './StyledComponents';

import logoSvg from '../../assets/svg/pizza-logo.svg';
import iconSvg from '../../assets/svg/iconSvg';


const Header = () => {

    const { cart } = useSelector(state => state.cart);
    const {t} = useTranslation();

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

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Link to="/">
                    <HeaderLogoWrapper>
                        <Img width="38px" src={logoSvg} alt="Pizza logo" />
                        <HeaderLogoDescription>
                            <HeaderTitle>Pizza</HeaderTitle>
                            <HeaderSubTitle>{t('headerTitle')}</HeaderSubTitle>
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
                        <Delimiter/>
                        <IconCustom
                            width='18'
                            height='18'
                            margin='0px 8px 1px 0px'
                        >
                            <SVG
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                                path={iconSvg.cart}
                            />
                        </IconCustom>
                        <span>{totalAmount(cart)}</span>
                    </BassicButton>
                </Link>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default memo(Header);