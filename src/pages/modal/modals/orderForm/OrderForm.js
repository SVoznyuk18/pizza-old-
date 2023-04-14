import React from "react";
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from "react-i18next";

import { Wrapper, Title, Form, ContactSection, AddressSection, TimeSection, StyledInput, DatePickerWrapper, Label } from './StyledComponents';
import { BassicInput, BassicButton, TimePicker, DatePicker } from 'ComponentsRoot';

const OrderForm = () => {

    const { t } = useTranslation();

    const { register, handleSubmit, setValue, control, formState: { errors, dirtyFields }, reset } = useForm({ mode: 'all' });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>{t('form.titleContacts')}</Title>
                <ContactSection>
                    <BassicInput
                        label={t('form.labelName')}
                        htmlFor='name'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='name'
                        type='text'
                        name='name'
                        placeholder={t('form.placeholderName')}
                        width='100%'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{ required: t('form.errorMessage.required'), minLength: { value: 5, message: t('form.errorMessage.moreCharacters', { count: 5 }) } }}
                        dirtyFields={dirtyFields?.name}
                        errorMessagemargin='5px'
                        errorMessage={errors?.name && errors?.name?.message}
                        required
                    />
                    <BassicInput
                        label={t('form.labelPhone')}
                        htmlFor='phone'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='phone'
                        type="tel"
                        inputmode="tel"
                        name='phone'
                        placeholder={t('form.placeholderPhone')}
                        width='100%'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{ required: t('form.errorMessage.required'), pattern: { value: /((0[\d]{2}))([\d-]{5,8})([\d]{2})/, message: t('form.errorMessage.wrongPhone') } }}
                        dirtyFields={dirtyFields?.phone}
                        errorMessagemargin='5px'
                        errorMessage={errors?.phone && errors?.phone?.message}
                    />
                    <BassicInput
                        label={t('form.labelEmail')}
                        htmlFor='email'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='email'
                        type='email'
                        name='email'
                        placeholder={t('form.placeholderEmail')}
                        width='100%'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{ required: t('form.errorMessage.required'), pattern: { value: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, message: t('form.errorMessage.wrongEmail') } }}
                        dirtyFields={dirtyFields?.email}
                        errorMessagemargin='5px'
                        errorMessage={errors?.email && errors?.email?.message}
                    />
                </ContactSection>
                <Title margin='20px 0 10px 0'>{t('form.titleAddress')}</Title>
                <AddressSection>
                    <BassicInput
                        label={t('form.labelStreet')}
                        htmlFor='street'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='street'
                        type='text'
                        name='street'
                        placeholder={t('form.placeholderStreet')}
                        width='100%'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{ required: t('form.errorMessage.required'), minLength: { value: 5, message: t('form.errorMessage.moreCharacters', { count: 5 }) } }}
                        dirtyFields={dirtyFields?.street}
                        errorMessagemargin='5px'
                        errorMessage={errors?.street && errors?.street?.message}
                    />
                    <BassicInput
                        label={t('form.labelHouse')}
                        htmlFor='house'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='house'
                        type='text'
                        name='house'
                        placeholder={t('form.placeholderHouse')}
                        width='150px'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{ required: t('form.errorMessage.required'), min: { value: 1, message: t('form.errorMessage.moreNumber', { count: 1 }) } }}
                        dirtyFields={dirtyFields?.house}
                        errorMessagemargin='5px'
                        errorMessage={errors?.house && errors?.house?.message}
                    />
                    <BassicInput
                        label={t('form.labelApartment')}
                        htmlFor='apartment'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='apartment'
                        type='number'
                        name='apartment'
                        placeholder={t('form.placeholderApartment')}
                        width='150px'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        validation={{ required: t('form.errorMessage.required'), min: { value: 1, message: t('form.errorMessage.moreNumber', { count: 1 }) } }}
                        dirtyFields={dirtyFields?.apartment}
                        errorMessagemargin='5px'
                        errorMessage={errors?.apartment && errors?.apartment?.message}
                    />
                </AddressSection>
                <Title margin='20px 0 10px 0'>{t('form.titleTime')}</Title>
                <TimeSection>
                    <TimePicker
                        label={t('form.labelTime')}
                        htmlFor='time'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        id='time'
                        type='text'
                        name='time'
                        placeholder={t('form.placeholderTime')}
                        start='00:00'
                        end='23:59'
                        step={30}
                        width='150px'
                        height='40px'
                        padding='5px 10px 5px 10px'
                        margin='0 10px 5px 0'
                        borderRadius='15px'
                        fontSize='16px'
                        register={register}
                        setValue={setValue}
                        validation={{ required: t('form.errorMessage.required') }}
                        dirtyFields={dirtyFields?.time}
                        errorMessagemargin='5px'
                        errorMessage={errors?.time && errors?.time?.message}
                    />
                    <DatePicker
                        label={t('form.labelDate')}
                        htmlFor='date'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'
                        name='date'
                        id='date'
                        width='150px'
                        height='40px'
                        margin='0 0 5px'
                        padding='5px 10px 5px 10px'
                        borderRadius='15px'
                        fontSize='16px'
                        placeholder={t('form.placeholderDate')}
                        control={control}
                        register={register}
                        validation={{ required: t('form.errorMessage.required') }}
                        dirtyFields={dirtyFields?.date}
                        errorMessage={errors?.date && errors?.date?.message}

                    />
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
                    {t('button.checkout')}
                </BassicButton>
            </Form>
        </Wrapper>
    )
};

export default OrderForm;