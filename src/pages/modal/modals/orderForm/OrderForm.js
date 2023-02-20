import React from "react";
import {useForm, Controller} from 'react-hook-form';
import DatePicker from "react-datepicker";

import {Wrapper, Title, Form, ContactSection, AddressSection, TimeSection, StyledInput, DatePickerWrapper, Label} from './StyledComponents';
import {BassicInput, BassicButton, TimePicker} from '../../../../components';
import { colors } from "../../../../configs/colors";

const OrderForm = () => {

    const {register, handleSubmit, setValue , control, formState: { errors, dirtyFields }, reset } = useForm( {mode: 'all', defaultValues: {date: new Date()}} );

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>Контакти</Title>
                <ContactSection>
                    <BassicInput
                        label='Name'
                        htmlFor='name'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='name'
                        type='text'
                        name='name'
                        placeholder='name'
                        width='100%'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{required: 'Обязательное поле', minLength: {value: 5, message: 'Должно быть более символов'}}}
                        dirtyFields={dirtyFields?.name}
                        errorMessagemargin='5px'
                        errorMessage={errors?.name && errors?.name?.message}
                    />
                    <BassicInput
                        label='Phone'
                        htmlFor='phone'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='phone'
                        type="tel"
                        inputmode="tel"
                        name='phone'
                        placeholder='phone'
                        width='100%'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{required: 'Обязательное поле', pattern: {value: /((0[\d]{2}))([\d-]{5,8})([\d]{2})/, message: 'Неправильный формат tel'}}}
                        dirtyFields={dirtyFields?.phone}
                        errorMessagemargin='5px'
                        errorMessage={errors?.phone && errors?.phone?.message}
                    />
                    <BassicInput
                        label='Email'
                        htmlFor='email'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='email'
                        type='email'
                        name='email'
                        placeholder='email'
                        width='100%'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{required: 'Обязательное поле', pattern: {value: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, message: 'Неправильный формат email'}}}
                        dirtyFields={dirtyFields?.email}
                        errorMessagemargin='5px'
                        errorMessage={errors?.email && errors?.email?.message}
                    />
                </ContactSection>
                <Title margin='20px 0 10px 0'>Address</Title>
                <AddressSection>
                    <BassicInput
                        label='Street'
                        htmlFor='street'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='street'
                        type='text'
                        name='street'
                        placeholder='Street'
                        width='100%'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{required: 'Обязательное поле', minLength: {value: 5, message: 'Должно быть более символов'}}}
                        dirtyFields={dirtyFields?.street}
                        errorMessagemargin='5px'
                        errorMessage={errors?.street && errors?.street?.message}
                    />
                    <BassicInput
                        label='House'
                        htmlFor='house'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='house'
                        type='text'
                        name='house'
                        placeholder='House'
                        width='150px'
                        height='40px'
                        margin='0 10px 5px 0'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{required: 'Обязательное поле', min: {value: 1, message: 'Должно быть более 1'}}}
                        dirtyFields={dirtyFields?.house}
                        errorMessagemargin='5px'
                        errorMessage={errors?.house && errors?.house?.message}
                    />
                    <BassicInput
                        label='Apartment'
                        htmlFor='apartment'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='apartment'
                        type='number'
                        name='apartment'
                        placeholder='Apartment'
                        width='150px'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{required: 'Обязательное поле', min: {value: 1, message: 'Должно быть более 1'}}}
                        dirtyFields={dirtyFields?.apartment}
                        errorMessagemargin='5px'
                        errorMessage={errors?.apartment && errors?.apartment?.message}
                    />
                </AddressSection>
                <Title margin='20px 0 10px 0'>Date and time</Title>
                <TimeSection>
                    <TimePicker
                        label='Time'
                        htmlFor='time'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='time'
                        type='text'
                        name='time'
                        placeholder='time'
                        start='00:00'
                        end='23:59'
                        step={30}
                        width='120px'
                        height='40px'
                        padding='5px 10px 5px 10px'
                        margin='0 10px 5px 0'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        setValue={setValue}
                        validation={{required: 'Обязательное поле'}}
                        dirtyFields={dirtyFields?.time}
                        errorMessagemargin='5px'
                        errorMessage={errors?.time && errors?.time?.message}
                    />
                    <DatePickerWrapper width='120px'>
                        <Label 
                            htmlFor='date'
                            labelFontSize='16px'
                            labelMarginBottom='5px'
                            labelLineHeight='16px'
                        >
                            Date
                        </Label>
                        <Controller
                            control={control}
                            name='date'
                            render={({ field }) => (
                                <DatePicker
                                    customInput={<StyledInput
                                        width='120px'
                                        height='40px'
                                        margin='0 0 5px'
                                        padding='5px 10px 5px 10px'
                                        borderRadius='15px'
                                        fontSize='16px'
                                        borderColor={colors.grey}
                                    />}
                                    dateFormat="d MMM yyyy"
                                    minDate={new Date()}
                                    selected={field.value}
                                    showTimeSelect={false}
                                    todayButton="Today"
                                    dropdownMode="select"
                                    placeholderText="Click to select time"
                                    shouldCloseOnSelect
                                    onChange={(date) => field.onChange(date)}
                                />
                            )}
                        />                
                    </DatePickerWrapper>
                </TimeSection>
                <BassicButton
                    type='submit'
                    display='flex'
                    padding='10px 20px'
                    width='130px'
                    backgroundColor="#ffff"
                    alignItems='center'
                    justifyContent='center'
                    fontWeight={600}
                    fontSize='16px'
                >
                    Замовити
                </BassicButton>
            </Form>
        </Wrapper>
    )
};

export default OrderForm;