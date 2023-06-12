import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux/es/exports';

// eslint-disable-next-line import/no-cycle
import {
  Img,
  BassicButton,
  SvgIcon,
  LanguagesMenu,
} from 'ComponentsRoot';
import { colors } from 'ConfigsRoot/colors';
import { languages } from 'ConfigsRoot/constants';
import { logout } from 'ActionsRoot';
import logoSvg from 'AssetsRoot/svg/pizza-logo.svg';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import adminIcon from 'AssetsRoot/admin.png';
import {
  HeaderWrapper,
  HeaderLogoWrapper,
  HeaderLogoDescription,
  HeaderTitle,
  HeaderSubTitle,
  Delimiter,
  Wrapper,
  Cost,
  Amount,
  UserContainer,
  UserName,
} from './StyledComponents';

const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();

  const { totalPrice, totalAmount } = useSelector((state) => state.cart);
  const { role, name } = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderWrapper>
      <HeaderLogoWrapper to="/">
        <Img width="38px" src={logoSvg} alt="Pizza logo" />
        <HeaderLogoDescription>
          <HeaderTitle>Pizza</HeaderTitle>
          <HeaderSubTitle>{t('headerTitle')}</HeaderSubTitle>
        </HeaderLogoDescription>
      </HeaderLogoWrapper>
      <Wrapper>
        <Choose>
          <When condition={role && (location.pathname === '/manager' || location.pathname === '/admin')}>
            <UserContainer>
              <Img width="40px" borderRadius="100" src={adminIcon} alt="img" />
              <UserName>{name}</UserName>
              <BassicButton
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="auto"
                padding="10px"
                backgroundColor={colors.white}
                onClick={() => handleLogout()}
              >
                Logout
              </BassicButton>
            </UserContainer>
          </When>
          <Otherwise>
            <Link to="/cart">
              <BassicButton
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="auto"
                padding="10px"
                backgroundColor={colors.orange}
              >
                <Cost>{t('common.cost', { cost: totalPrice })}</Cost>
                <Delimiter />
                <SvgIcon
                  width="18px"
                  height="18px"
                  viewBox="0 0 18 18"
                  path={iconSvg.cart}
                  margin="0px 8px 1px 0px"
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
};

export default memo(Header);
