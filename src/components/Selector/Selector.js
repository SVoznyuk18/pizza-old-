import React, {memo} from "react";

import {List, ListItem, ListItemActive, ListItemDisable} from './StyledComponents';

const Selector = ({avaliableItems, handleSelect, types, selectedType }) => {
    return (
        <List>
            {avaliableItems && avaliableItems.map((type, index) => {
                if(!types.includes(type)) return <ListItemDisable key={type} onClick={() => handleSelect(type)}>{type}</ListItemDisable>
                if(selectedType === type) return <ListItemActive key={type} onClick={() => handleSelect(type)}>{type}</ListItemActive>
                return <ListItem key={type} onClick={() => handleSelect(type)}>{type}</ListItem>
            })}
        </List>
    );
};

export default memo(Selector);
