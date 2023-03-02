import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { Img, BassicButton, SVG, LanguagesMenu } from '../index';
import { HeaderWrapper, HeaderLogoWrapper, HeaderLogoDescription, HeaderTitle, HeaderSubTitle, IconCustom, Delimiter, Wrapper, Cost, Amount } from './StyledComponents';

import logoSvg from 'Assets/svg/pizza-logo.svg';
import iconSvg from 'Assets/svg/iconSvg';
import { languages, breakPoints } from 'Configs/constants';
import { convertCost, useWindowSize } from 'Utils';

const Header = ({ totalPrice, totalAmount }) => {
    
    const { t } = useTranslation();
    const size = useWindowSize();

    return (
        <HeaderWrapper>
            <If condition={size.width >= breakPoints.TABLET}>
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
                        width='auto'
                        padding="10px"
                        backgroundColor="#fe5f1e"
                    >
                        <Cost>{convertCost(totalPrice)}</Cost>
                        <Delimiter />
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
                        <Amount>{totalAmount}</Amount>
                    </BassicButton>
                </Link>
                <LanguagesMenu menuItems={languages} />
            </Wrapper>

        </HeaderWrapper>
    );
}

Header.propTypes = {
    totalPrice: PropTypes.number,
    totalAmount: PropTypes.number,
};

Header.defaultProps = {
    totalPrice: 0,
    totalAmount: 0
}

export default memo(Header);