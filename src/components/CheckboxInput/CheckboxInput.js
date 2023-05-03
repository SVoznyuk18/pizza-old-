import React, { useState, useRef, useEffect } from "react";


import { Wrapper, InputWrapper } from './StyledComponents';

const CheckboxInput = ({ name, register, setValue, validation, clearErrors, checboxItems }) => {

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

        if(checkboxValue.length !== 0) clearErrors(name);

    }, [checkboxValue])

    return (
        <Wrapper>
            {
                checboxItems && checboxItems.map(item => (
                    <InputWrapper key={item}>
                        <input
                            type="checkbox"

                            id={item}
                            name={name}
                            value={item}
                            {...rest}
                            ref={(e) => { checkboxRef.current = e }}
                            onChange={handleChange}

                        />
                        <label htmlFor={item}>{item}</label>
                    </InputWrapper>
                ))
            }
        </Wrapper>
    )
}

export default CheckboxInput;