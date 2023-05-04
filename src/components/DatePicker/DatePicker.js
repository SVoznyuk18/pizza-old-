import React from "react";
import { Controller } from 'react-hook-form';
import DatePicker from "react-datepicker";

import { ErrorMessage, Label } from 'ComponentsRoot';
import { Wrapper, StyledInput } from './StyledComponents';
import { colors } from "ConfigsRoot/colors";

const getColor = (error, dirtyFields) => {
    if (error) return colors.errorMessage;
    if (!error && dirtyFields) return colors.validColor;
    return colors.grey;
}

const DatePickerSection = ({ htmlFor, labelFontSize, labelMarginBottom, labelLineHeight, label, control, name, id, type, width, height, padding, borderRadius, placeholder, register, validation, dirtyFields, errorMessagemargin, errorMessage }) => {

    return (
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
                        customInput={<StyledInput
                            id={id}
                            type={type}
                            name={name}
                            width={width}
                            height={height}
                            padding={padding}
                            borderRadius={borderRadius}
                            borderColor={getColor(errorMessage, dirtyFields)}
                            {...register(name, validation)}
                        />}
                        dateFormat="d MMM yyyy"
                        minDate={new Date()}
                        selected={field.value}
                        showTimeSelect={false}
                        todayButton="Today"
                        dropdownMode="select"
                        placeholderText={placeholder}
                        shouldCloseOnSelect
                        // validation={{ required: t('form.errorMessage.required') }}
                        // errorMessagemargin='5px'
                        // errorMessage={errors?.time && errors?.time?.message}

                        onChange={(date) => field.onChange(date)}
                    />
                )}
            />
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </Wrapper>
    );
}

export default DatePickerSection;