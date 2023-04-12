import React, { useState, useMemo, memo } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';

import { LanguagesWrapper, MenuHeader, MenuContent, MenuItem, Img, Title } from './StyledComponents';

const LanguagesMenu = ({ menuItems }) => {

    const [langCookies] = useCookies(['i18next']);
    const langLocalStorage = localStorage.getItem('i18nextLng');
    const { i18n } = useTranslation();

    const [language, setLanguage] = useState(langLocalStorage || langCookies.i18next);
    const [toggleMenu, setToggleMenu] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const choosenLanguage = useMemo(() => {
        return menuItems.find(item => item?.lang === language);
    }, [menuItems, language]);

    return (
        <LanguagesWrapper>
            <MenuHeader onClick={() => setToggleMenu(!toggleMenu)}>
                <Img src={choosenLanguage?.flag} />
                <Title>{choosenLanguage?.title}</Title>
            </MenuHeader>
            <MenuContent toggleMenu={toggleMenu}>
                {menuItems && menuItems.map(item => {
                    return (
                        <MenuItem key={item?.id} onClick={() => {
                            setToggleMenu(false);
                            changeLanguage(item?.lang);
                            setLanguage(item?.lang);
                        }}>
                            <Img src={item?.flag} />
                            <Title>{item?.title}</Title>
                        </MenuItem>
                    );
                })}
            </MenuContent>
        </LanguagesWrapper>
    )
};

LanguagesMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default memo(LanguagesMenu);