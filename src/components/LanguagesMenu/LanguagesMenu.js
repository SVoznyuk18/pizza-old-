import React, {useState, useMemo} from "react";
import PropTypes from 'prop-types';

import {LanguagesWrapper, MenuHeader, MenuContent, MenuItem, Img, Title} from './StyledComponents';

const lang = localStorage.getItem('i18nextLng');

const LanguagesMenu = ({menuItems, changleLanguage}) => {

    const [language, setLanguage] = useState(lang);
    const [toggleMenu, setToggleMenu] = useState(false);
    
    const choosenLanguage = useMemo(() => {
        return menuItems.find(item => item?.lang === language);
    } , [menuItems, language]); 

    return (
        <LanguagesWrapper>
            <MenuHeader onClick={() => setToggleMenu(!toggleMenu)}>
                <Img src={choosenLanguage?.flag}/>
                <Title>{choosenLanguage?.title}</Title>
            </MenuHeader>
            <MenuContent toggleMenu={toggleMenu}>
                {menuItems && menuItems.map(item => {
                    return (
                        <MenuItem key={item?.id} onClick={() => {
                            setToggleMenu(false);
                            changleLanguage(item?.lang);
                            setLanguage(item?.lang);
                        }}>
                            <Img src={item?.flag}/>
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
    changleLanguage: PropTypes.func
};

LanguagesMenu.defaultProps = {
    changleLanguage: () => {}
}

export default LanguagesMenu;