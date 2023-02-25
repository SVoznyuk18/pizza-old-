import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Img, BassicButton, SVG, LanguagesMenu } from '../index';
import { HeaderWrapper, HeaderLogoWrapper, HeaderLogoDescription, HeaderTitle, HeaderSubTitle, IconCustom, Delimiter, Wrapper } from './StyledComponents';

import logoSvg from '../../assets/svg/pizza-logo.svg';
import iconSvg from '../../assets/svg/iconSvg';
import { languages, breakPoints } from '../../configs/constants';

const Header = ({totalPrice, totalAmount, screenWidth}) => {

    const {t, i18n} = useTranslation();

    const changleLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <HeaderWrapper>
            <If condition={screenWidth >= breakPoints.TABLET}>
                <Link to="/">
                    <HeaderLogoWrapper>
                        <Img width="38px" src={logoSvg} alt="Pizza logo" />
                        <HeaderLogoDescription>
                            <HeaderTitle>Pizza</HeaderTitle>
                            <HeaderSubTitle>{t('headerTitle')}</HeaderSubTitle>
                        </HeaderLogoDescription>
                    </HeaderLogoWrapper>
                </Link>
            </If>
           
            <Wrapper>
                <Link to={"/cart"}>
                    <BassicButton
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="175px"
                        padding="12px 25px"
                        backgroundColor="#fe5f1e"
                    >
                        <span>{`${totalPrice} ₽`}</span>
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
                        <span>{totalAmount}</span>
                    </BassicButton>
                </Link>
                <LanguagesMenu menuItems={languages} changleLanguage={changleLanguage}/>
            </Wrapper> 

        </HeaderWrapper>
    );
}

Header.propTypes = {
    totalPrice: PropTypes.number,
    totalAmount: PropTypes.number,
    screenWidth: PropTypes.number.isRequired
};

Header.defaultProps = {
    totalPrice: 0,
    totalAmount: 0
}

export default memo(Header);