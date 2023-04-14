import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import { formatedTimeArray, setDisableTime } from 'UtilsRoot';
import { ErrorMessage } from 'ComponentsRoot';
import { colors } from "ConfigsRoot/colors"
import { Wrapper, Label, Input, WrapperTimeList, TimeList, ListItem } from './StyledComponents';


const getColor = (error, dirtyFields) => {
    if (error) return colors.errorMessage;
    if (!error && dirtyFields) return colors.validColor;
    return colors.grey;
}

const TimePicker = ({ label, htmlFor, labelFontSize, labelMarginBottom, labelLineHeight, id, type, name, placeholder, width, height, padding, borderRadius, fontSize, margin, register, validation, dirtyFields, errorMessage, errorMessagemargin, start, end, step, setValue }) => {

    const [showTimeList, setShowTimeList] = useState(false);
    const timeArray = formatedTimeArray(start, end, step);

    const handleHideList = (e) => {
        if (!(e.target.nodeName === 'LI' || e.target.nodeName === 'INPUT')) setShowTimeList(false);
    }

    useEffect(() => {
        if (showTimeList) {
            window.addEventListener('click', handleHideList);
        }

        return () => {
            window.removeEventListener('click', handleHideList);
        };
    }, [showTimeList])

    return (
        <Wrapper
            borderRadius={borderRadius}
            // width={width}
            margin={margin}
        >
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
                autocomplete="off"
                name={name}
                width={width}
                height={height}
                placeholder={placeholder}
                padding={padding}
                borderRadius={borderRadius}
                fontSize={fontSize}
                borderColor={getColor(errorMessage, dirtyFields)}
                {...register(name, validation)}
                onClick={() => setShowTimeList(true)}
            />
            <ErrorMessage errorMessagemargin={errorMessagemargin}>{errorMessage}</ErrorMessage>
            <WrapperTimeList showTimeList={showTimeList}>
                <TimeList>
                    {
                        timeArray && timeArray.map((time, index) => {
                            return <ListItem
                                disabled={setDisableTime(time.milliseconds)}
                                key={index}
                                onClick={
                                    () => {
                                        if (setDisableTime(time.milliseconds)) {
                                            setValue(name, `${time.hours} : ${time.minutes}`, { shouldValidate: true });
                                            setShowTimeList(false);
                                        }
                                    }
                                }
                            >
                                {`${time.hours} : ${time.minutes}`}
                            </ListItem>
                        })
                    }
                </TimeList>
            </WrapperTimeList>
        </Wrapper>
    );
};

TimePicker.propTypes = {
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
    borderRadius: PropTypes.string,
    fontSize: PropTypes.string,
    margin: PropTypes.string,
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
    start: PropTypes.string,
    end: PropTypes.string,
    step: PropTypes.number,
    setValue: PropTypes.func
}

TimePicker.defaultProps = {
    label: '',
    htmlFor: '',
    labelFontSize: '',
    labelMarginBottom: '',
    labelLineHeight: '',
    id: '',
    type: '',
    name: '',
    placeholder: '',
    width: '',
    height: '',
    padding: '',
    borderRadius: '',
    fontSize: '',
    margin: '',
    register: () => { },
    dirtyFields: false,
    errorMessage: '',
    errorMessagemargin: '',
    start: '00:00',
    end: '23:59',
    step: 30,
    setValue: () => { }
}

export default memo(TimePicker);