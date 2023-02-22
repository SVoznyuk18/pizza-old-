import React, {useState, useEffect} from 'react';

import { formatedTimeArray, setDisableTime } from '../../utils';
import { ErrorMessage } from '../';
import { colors } from "../../configs/colors"
import {Wrapper, Label, Input, WrapperTimeList, TimeList, ListItem} from './StyledComponents';;


const getColor = (error, dirtyFields) => {
    if (error) return colors.errorMessage;
    if(!error && dirtyFields) return colors.validColor;
    return colors.grey;
}

const TimePicker = ({label, htmlFor, labelFontSize, labelMarginBottom, labelLineHeight, id, type, name, placeholder, width, height, padding, borderRadius, fontSize, margin, register, validation, dirtyFields, errorMessage, errorMessagemargin, start, end, step, setValue }) => {

    const [showTimeList, setShowTimeList] = useState(false);
    const timeArray = formatedTimeArray(start, end, step);

    const handleHideList = (e) => {
        if(!(e.target.nodeName === 'LI' || e.target.nodeName === 'INPUT')) setShowTimeList(false);
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
            width={width}
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
                placeholder={placeholder}
                width={width}
                height={height}
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
                        timeArray && timeArray.map((time, index ) => {
                            return <ListItem 
                                disabled={setDisableTime(time.milliseconds)}
                                key={index} 
                                onClick={
                                    () => {
                                        if(setDisableTime(time.milliseconds)) {
                                            setValue(name, `${time.hours} : ${time.minutes}`, {shouldValidate: true});
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
}

export default TimePicker;