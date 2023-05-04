import React, { useState, useRef, useEffect } from "react";

import { Label, ErrorMessage } from 'ComponentsRoot';

import { Wrapper, CheckboxGroup, CheckboxBlock } from './StyledComponents';

const CheckboxInput = ({ name, register, setValue, validation, clearErrors, checboxItems, labelFontSize, labelMarginBottom, labelLineHeight, label, errorMessage }) => {

    const checkboxRef = useRef();

    const [checkboxValue, setCheckboxValue] = useState([]);

    const { ref, ...rest } = register(name, validation);

    const handleChange = (e) => {
        let value = [];
        if (!e.target.checked) {
            value = checkboxValue.filter(item => item !== e.target.value);
            setCheckboxValue(() => {
                return value.sort((a, b) => a - b);
            });
        } else {
            setCheckboxValue(() => {
                return [...checkboxValue, e.target.value].sort((a, b) => a - b);
            });
        }
    }

    useEffect(() => {
        setValue(name, checkboxValue)

        if (checkboxValue.length !== 0) clearErrors(name);

    }, [checkboxValue])

    return (
        <Wrapper>
            <Label
                labelFontSize={labelFontSize}
                labelMarginBottom={labelMarginBottom}
                labelLineHeight={labelLineHeight}
                label={label}
            />
            <CheckboxGroup>
                {
                    checboxItems && checboxItems.map(item => (
                        <CheckboxBlock key={item}>
                            <input
                                type="checkbox"
                                id={item}
                                name={name}
                                value={item}
                                {...rest}
                                ref={(e) => { checkboxRef.current = e }}
                                onChange={handleChange}
                            />
                            <Label
                                htmlFor={item}
                                labelFontSize={labelFontSize}
                                labelMarginBottom='0px'
                                labelLineHeight={labelLineHeight}
                                label={item}
                            ></Label>
                        </CheckboxBlock>
                    ))
                }
            </CheckboxGroup>
            <ErrorMessage>{errorMessage}</ErrorMessage>

        </Wrapper>
    )
}

export default CheckboxInput;