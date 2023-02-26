import React, { memo } from "react";
import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from './StyledComponents';

import { ErrorMessage } from '../';

import { colors } from "../../configs/colors";


const getColor = (error, dirtyFields) => {
    if (error) return colors.errorMessage;
    if (!error && dirtyFields) return colors.validColor;
    return colors.grey;
}

const BassicInput = ({ label, htmlFor, labelFontSize, labelMarginBottom, labelLineHeight, id, type, name, placeholder, width, height, padding, margin, borderRadius, register, validation, dirtyFields, errorMessage, errorMessagemargin, errorFontSize, value }) => {
    return (
        <Wrapper width={width} margin={margin}>
            <Label
                htmlFor={htmlFor}
                labelFontSize={labelFontSize}
                labelMarginBottom={labelMarginBottom}
                labelLineHeight={labelLineHeight}
            >
                {label}
            </Label>
            <Input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                width={width}
                height={height}
                value={value}
                padding={padding}
                borderRadius={borderRadius}
                borderColor={getColor(errorMessage, dirtyFields)}
                {...register(name, validation)}
            />
            <ErrorMessage errorMessagemargin={errorMessagemargin} errorFontSize={errorFontSize} >{errorMessage}</ErrorMessage>
        </Wrapper>
    )
};

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
    register: PropTypes.func,
    validation: PropTypes.objectOf({
        required: PropTypes.string,
        minLength: PropTypes.object,
        pattern: PropTypes.object,
        min: PropTypes.object
    }).isRequired,
    dirtyFields: PropTypes.bool,
    errorMessage: PropTypes.string,
    errorMessagemargin: PropTypes.string,
    errorFontSize: PropTypes.string,
    value: PropTypes.string
};

BassicInput.defaultProps = {
    label: '',
    htmlFor: '',
    labelFontSize: '16px',
    labelMarginBottom: '',
    labelLineHeight: '',
    id: '',
    type: '',
    name: '',
    placeholder: '',
    width: '',
    height: '',
    padding: '',
    margin: '',
    borderRadius: '',
    register: () => { },
    dirtyFields: false,
    errorMessage: '',
    errorMessagemargin: '',
    errorFontSize: '',
    value: ''
}

export default memo(BassicInput);