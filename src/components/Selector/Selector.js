import React, { memo } from "react";
import PropTypes from 'prop-types';

import { List, ListItem, ListItemActive, ListItemDisable } from './StyledComponents';

const Selector = memo(({ avaliableItems, handleSelect, types, selectedType }) => {
    console.log('types', types);
    return (
        <List>
            {avaliableItems && avaliableItems.map((type, index) => {
                if (!types.includes(type)) return <ListItemDisable key={type} onClick={() => handleSelect(type)}>{type}</ListItemDisable>
                if (selectedType === type) return <ListItemActive key={type} onClick={() => handleSelect(type)}>{type}</ListItemActive>
                return <ListItem key={type} onClick={() => handleSelect(type)}>{type}</ListItem>
            })}
        </List>
    );
});

Selector.propTypes = {
    avaliableItems: PropTypes.arrayOf(PropTypes.string),
    handleSelect: PropTypes.func,
    types: PropTypes.arrayOf(PropTypes.string),
    selectedType: PropTypes.string
};

Selector.defaultProps = {
    avaliableItems: [],
    handleSelect: () => { },
    types: [],
    selectedType: ''
};

export default Selector;
