import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-cycle
import { ErrorMessage, Label } from 'ComponentsRoot';
import { colors } from 'ConfigsRoot/colors';
import { Wrapper, StyledInput } from './StyledComponents';

const getColor = (error, dirtyFields) => {
  if (error) return colors.errorMessage;
  if (!error && dirtyFields) return colors.validColor;
  return colors.grey;
};

const DatePickerSection = ({
  htmlFor,
  labelFontSize,
  labelMarginBottom,
  labelLineHeight,
  label,
  control,
  name,
  id,
  width,
  height,
  padding,
  borderRadius,
  placeholder,
  register,
  validation,
  dirtyFields,
  errorMessage,
}) => (
  <Wrapper>
    <Label
      htmlFor={htmlFor}
      labelFontSize={labelFontSize}
      labelMarginBottom={labelMarginBottom}
      labelLineHeight={labelLineHeight}
      label={label}
    />
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DatePicker
          customInput={(
            <StyledInput
              id={id}
              name={name}
              width={width}
              height={height}
              padding={padding}
              borderRadius={borderRadius}
              borderColor={getColor(errorMessage, dirtyFields)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register(name, validation)}
            />
          )}
          dateFormat="d MMM yyyy"
          minDate={new Date()}
          selected={field.value}
          showTimeSelect={false}
          todayButton="Today"
          dropdownMode="select"
          placeholderText={placeholder}
          shouldCloseOnSelect
          onChange={(date) => field.onChange(date)}
        />
      )}
    />
    <ErrorMessage>{errorMessage}</ErrorMessage>
  </Wrapper>
);

DatePickerSection.propTypes = {
  htmlFor: PropTypes.string,
  labelFontSize: PropTypes.string,
  labelMarginBottom: PropTypes.string,
  labelLineHeight: PropTypes.string,
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
  dirtyFields: PropTypes.bool,
  errorMessage: PropTypes.string,
};

DatePickerSection.defaultProps = {
  htmlFor: '',
  label: '',
  labelFontSize: '14px',
  labelMarginBottom: '3px',
  labelLineHeight: '14px',
  control: {},
  name: '',
  id: '',
  width: '150px',
  height: '30px',
  padding: '5px 10px 5px 10px',
  borderRadius: '15px',
  placeholder: '',
  register: () => {},
  dirtyFields: false,
  errorMessage: '',
};

export default DatePickerSection;
