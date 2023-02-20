
import React from "react";

import {Wrapper, Label, Input} from './StyledComponents';

import { ErrorMessage } from '../';

import { colors } from "../../configs/colors";


const getColor = (error, dirtyFields) => {
    if (error) return colors.errorMessage;
    if(!error && dirtyFields) return colors.validColor;
    return colors.grey;
}

const BassicInput = ({label, htmlFor, labelFontSize, labelMarginBottom, labelLineHeight, id, type, name, placeholder, width, height, padding, margin, borderRadius, register, validation, dirtyFields, errorMessage, errorMessagemargin, errorFontSize, value}) => {
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

export default BassicInput;