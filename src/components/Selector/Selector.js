import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  List,
  ListItem,
  ListItemActive,
  ListItemDisable,
} from './StyledComponents';

const Selector = ({
  avaliableItems,
  handleSelect,
  types,
  selectedType,
  selectorType,
}) => {
  const { t } = useTranslation();

  return (
    <List>
      {avaliableItems && avaliableItems.map((type) => (
        <Choose>
          <When condition={!types.includes(type)}>
            <ListItemDisable key={type} onClick={() => handleSelect(type)}>
              {selectorType ? type : t(`pizzaType.${type}`)}
            </ListItemDisable>
          </When>
          <When condition={selectedType === type}>
            <ListItemActive key={type} onClick={() => handleSelect(type)}>
              {selectorType ? type : t(`pizzaType.${type}`)}
            </ListItemActive>
          </When>
          <Otherwise>
            <ListItem key={type} onClick={() => handleSelect(type)}>
              {selectorType ? type : t(`pizzaType.${type}`)}
            </ListItem>
          </Otherwise>
        </Choose>
      ))}
    </List>
  );
};

Selector.propTypes = {
  avaliableItems: PropTypes.arrayOf(PropTypes.string),
  handleSelect: PropTypes.func,
  types: PropTypes.arrayOf(PropTypes.string),
  selectedType: PropTypes.string,
  selectorType: PropTypes.string,
};

Selector.defaultProps = {
  avaliableItems: [],
  handleSelect: () => {},
  types: [],
  selectedType: '',
  selectorType: '',
};

export default memo(Selector);
