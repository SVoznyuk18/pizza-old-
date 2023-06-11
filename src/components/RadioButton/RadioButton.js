import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Radio,
  RadioTitle,
  RadioGroup,
  RadioItem,
  RadioInput,
  RadioLabel,
  RadioCheck,
} from './StyledComponents';

const RadioButton = ({
  name,
  currentOrderStatus,
  radioItems,
  onChancheOrderStatus,
}) => {
  const [radioValue, setRadioValue] = useState(currentOrderStatus);

  return (
    <Radio>
      <RadioTitle>Order status:</RadioTitle>
      <RadioGroup>
        {radioItems?.length > 0 && radioItems.map((radioItem) => (
          <RadioItem key={radioItem}>
            <RadioInput
              type="radio"
              id={radioItem}
              name={name}
              value={radioItem}
              checked={radioItem === radioValue}
              readOnly
            />
            <RadioLabel
              htmlFor={radioItem}
              onClick={() => {
                setRadioValue(radioItem);
                onChancheOrderStatus(radioItem);
              }}
            >
              {radioItem}
            </RadioLabel>
            <RadioCheck id="check" />
          </RadioItem>
        ))}
      </RadioGroup>
    </Radio>
  );
};

RadioButton.propTypes = {
  radioItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentOrderStatus: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChancheOrderStatus: PropTypes.func,
};

RadioButton.defaultProps = {
  name: '',
  onChancheOrderStatus: () => {},
};

export default memo(RadioButton);
