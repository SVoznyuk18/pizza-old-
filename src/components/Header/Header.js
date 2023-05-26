import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import { Img, BassicButton, SvgIcon, LanguagesMenu } from 'ComponentsRoot';
import { HeaderWrapper, HeaderLogoWrapper, HeaderLogoDescription, HeaderTitle, HeaderSubTitle, Delimiter, Wrapper, Cost, Amount, UserContainer, UserName } from './StyledComponents';

import { logout } from "ActionsRoot";
import logoSvg from 'AssetsRoot/svg/pizza-logo.svg';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import adminIcon from 'AssetsRoot/admin.png';
import { languages, breakPoints } from 'ConfigsRoot/constants';
import { convertCost, useWindowSize } from 'UtilsRoot';

import { colors } from 'ConfigsRoot/colors';

const Header = ({ totalPrice, totalAmount }) => {

    const dispatch = useDispatch();
    const { role, name } = useSelector(state => state.login);
    const { t } = useTranslation();
    const size = useWindowSize();
    const location = useLocation();
   
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
                <Choose>
                    <When condition={!!role && location.pathname === '/admin'}>
                        <UserContainer>
                            <Img width="40px" borderRadius='100%' src={adminIcon} alt='img'/>
                            <UserName>{name}</UserName>
                            <BassicButton
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                width='auto'
                                padding="10px"
                                backgroundColor= {colors.white}
                                onClick={() => dispatch(logout())}
                            >
                                Logout
                            </BassicButton>
                        </UserContainer>
                    </When>
                    <Otherwise>
                        <Link to={"/cart"}>
                            <BassicButton
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                width='auto'
                                padding="10px"
                                backgroundColor={colors.orange}
                            >
                                <Cost>{t('common.cost', { cost: totalPrice })}</Cost>
                                <Delimiter />
                                    <SvgIcon
                                        width='18px'
                                        height='18px'
                                        viewBox='0 0 18 18'
                                        path={iconSvg.cart}
                                        margin='0px 8px 1px 0px'
                                    />
                                <Amount>{totalAmount}</Amount>
                            </BassicButton>
                        </Link>
                    </Otherwise>
                </Choose>
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