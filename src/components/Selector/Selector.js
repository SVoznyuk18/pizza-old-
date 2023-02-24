import React, { memo } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import { List, ListItem, ListItemActive, ListItemDisable } from './StyledComponents';

const Selector = memo(({ avaliableItems, handleSelect, types, selectedType, selectorType }) => {
    const {t} = useTranslation();
    return (
        <List>
            {avaliableItems && avaliableItems.map(type => {

                if (!types.includes(type)) return <ListItemDisable key={type} onClick={() => handleSelect(type)}>{selectorType ? type : t(`pizzaType.${type}`)}</ListItemDisable>
                if (selectedType === type) return <ListItemActive key={type} onClick={() => handleSelect(type)}>{selectorType ? type : t(`pizzaType.${type}`)}</ListItemActive>
                return <ListItem key={type} onClick={() => handleSelect(type)}>{selectorType ? type : t(`pizzaType.${type}`)}</ListItem>
            })}
        </List>
    );
});

Selector.propTypes = {
    avaliableItems: PropTypes.arrayOf(PropTypes.string),
    handleSelect: PropTypes.func,
    types: PropTypes.arrayOf(PropTypes.string),
    selectedType: PropTypes.string,
    selectorType: PropTypes.string
};

Selector.defaultProps = {
    avaliableItems: [],
    handleSelect: () => { },
    types: [],
    selectedType: '',
    selectorType: ''
};

export default Selector;
