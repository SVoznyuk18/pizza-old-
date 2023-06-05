import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { colors } from 'ConfigsRoot/colors';
// eslint-disable-next-line import/no-cycle
import { ErrorMessage, Label } from 'ComponentsRoot';
import { Wrapper, Input } from './StyledComponents';

const getColor = (error, dirtyFields) => {
  if (error) return colors.errorMessage;
  if (!error && dirtyFields) return colors.validColor;
  return colors.grey;
};

const BassicInput = ({
  label,
  htmlFor,
  labelFontSize,
  labelMarginBottom,
  labelLineHeight,
  id,
  type,
  name,
  placeholder,
  width,
  height,
  padding,
  margin,
  borderRadius,
  fontSize,
  register,
  validation,
  dirtyFields,
  errorMessage,
  errorMessagemargin,
}) => (
  <Wrapper width={width} margin={margin}>
    <Label
      htmlFor={htmlFor}
      labelFontSize={labelFontSize}
      labelMarginBottom={labelMarginBottom}
      labelLineHeight={labelLineHeight}
      label={label}
    />
    <Input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      borderColor={getColor(errorMessage, dirtyFields)}
      fontSize={fontSize}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...register(name, validation)}
    />
    <ErrorMessage
      errorMessagemargin={errorMessagemargin}
    >
      {errorMessage}
    </ErrorMessage>
  </Wrapper>
);

BassicInput.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  labelFontSize: PropTypes.string,
  labelMarginBottom: PropTypes.string,
  labelLineHeight: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  borderRadius: PropTypes.string,
  fontSize: PropTypes.string,
  register: PropTypes.func,
  validation: PropTypes.shape({
    required: PropTypes.string,
    minLength: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    pattern: PropTypes.shape({
      value: PropTypes.shape(RegExp),
      message: PropTypes.string,
    }),
    min: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
  }).isRequired,
  dirtyFields: PropTypes.bool,
  errorMessage: PropTypes.string,
  errorMessagemargin: PropTypes.string,
};

BassicInput.defaultProps = {
  label: '',
  htmlFor: '',
  labelFontSize: '16px',
  labelMarginBottom: '5px',
  labelLineHeight: '16px',
  id: '',
  type: '',
  name: '',
  placeholder: '',
  width: '100%',
  height: '40px',
  padding: '5px 10px 5px 10px',
  margin: '0 0 5px',
  borderRadius: '15px',
  fontSize: '16px',
  register: () => { },
  dirtyFields: false,
  errorMessage: '',
  errorMessagemargin: '5px',
};

export default memo(BassicInput);
