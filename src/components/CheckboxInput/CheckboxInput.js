import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import { Label, ErrorMessage } from 'ComponentsRoot';
import { Wrapper, CheckboxGroup, CheckboxBlock } from './StyledComponents';

const CheckboxInput = ({
  name,
  register,
  setValue,
  validation,
  clearErrors,
  checboxItems,
  labelFontSize,
  labelMarginBottom,
  labelLineHeight,
  label,
  htmlFor,
  errorMessage,
}) => {
  const checkboxRef = useRef();
  const [checkboxValue, setCheckboxValue] = useState([]);
  const { ref, ...rest } = register(name, validation);

  const handleChange = (e) => {
    let value = [];
    if (!e.target.checked) {
      value = checkboxValue.filter((item) => item !== e.target.value);
      setCheckboxValue(() => value.sort((a, b) => a - b));
    } else {
      setCheckboxValue(() => [...checkboxValue, e.target.value].sort((a, b) => a - b));
    }
  };

  useEffect(() => {
    setValue(name, checkboxValue);
    if (checkboxValue.length !== 0) clearErrors(name);
  }, [checkboxValue]);

  return (
    <Wrapper>
      <Label
        htmlFor={htmlFor}
        labelFontSize={labelFontSize}
        labelMarginBottom={labelMarginBottom}
        labelLineHeight={labelLineHeight}
        label={label}
      />
      <CheckboxGroup>
        {
          checboxItems.length > 0 && checboxItems.map((item) => (
            <CheckboxBlock key={item}>
              <input
                type="checkbox"
                id={item}
                name={name}
                value={item}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
                ref={(e) => { checkboxRef.current = e; }}
                onChange={handleChange}
              />
              <Label
                htmlFor={item}
                labelFontSize={labelFontSize}
                labelMarginBottom="0px"
                labelLineHeight={labelLineHeight}
                label={item}
              />
            </CheckboxBlock>
          ))
        }
      </CheckboxGroup>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Wrapper>
  );
};

CheckboxInput.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
  setValue: PropTypes.func,
  validation: PropTypes.shape({ required: PropTypes.string }).isRequired,
  clearErrors: PropTypes.func,
  checboxItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  labelFontSize: PropTypes.string,
  labelMarginBottom: PropTypes.string,
  labelLineHeight: PropTypes.string,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  errorMessage: PropTypes.string,
};

CheckboxInput.defaultProps = {
  name: '',
  register: () => {},
  setValue: () => {},
  clearErrors: () => {},
  labelFontSize: '16px',
  labelMarginBottom: '10px',
  labelLineHeight: '16px',
  label: '',
  htmlFor: '',
  errorMessage: '',
};

export default CheckboxInput;
