import React from "react";
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

import { handleToggleModal, createNewManager } from 'ActionsRoot';

import { Wrapper, Form } from './StyledComponents';
import { BassicInput, BassicButton, FileUploader } from 'ComponentsRoot';

const NewManagerForm = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { register, handleSubmit, setValue, formState: { errors, dirtyFields }, reset, clearErrors } = useForm();

    const onSubmit = (data) => {

        console.log(data);
        dispatch(createNewManager(data));
        reset();
    }

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
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

                <BassicInput
                    label='password'
                    htmlFor='password'
                    labelFontSize='16px'
                    labelMarginBottom='5px'
                    labelLineHeight='16px'
                    id='password'
                    type='password'
                    name='password'
                    placeholder={t('form.placeholderEmail')}
                    width='100%'
                    height='40px'
                    margin='0 0 5px'
                    padding='5px 10px 5px 10px'
                    borderRadius='15px'
                    fontSize='16px'
                    register={register}
                    validation={{ required: t('form.errorMessage.required'), minLength: { value: 5, message: t('form.errorMessage.moreCharacters', { count: 5 }) } }}
                    dirtyFields={dirtyFields?.password}
                    errorMessagemargin='5px'
                    errorMessage={errors?.password && errors?.password?.message}
                />
                <BassicInput
                    label='role'
                    htmlFor='role'
                    labelFontSize='16px'
                    labelMarginBottom='5px'
                    labelLineHeight='16px'
                    id='role'
                    type='text'
                    name='role'
                    placeholder='role'
                    width='100%'
                    height='40px'
                    margin='0 0 5px'
                    padding='5px 10px 5px 10px'
                    borderRadius='15px'
                    fontSize='16px'
                    register={register}
                    validation={{ required: t('form.errorMessage.required'), minLength: { value: 4, message: t('form.errorMessage.moreCharacters', { count: 4 }) } }}
                    dirtyFields={dirtyFields?.role}
                    errorMessagemargin='5px'
                    errorMessage={errors?.role && errors?.role?.message}
                />
                <FileUploader
                    name='avatarUrl'
                    id='avatarUrl'
                    label='avatarUrl'
                    htmlFor='date'
                    labelFontSize='16px'
                    labelMarginBottom='5px'
                    labelLineHeight='16px'
                    register={register}
                    setValue={setValue}
                    validation={{ required: t('form.errorMessage.required') }}
                    errorMessagemargin='5px'
                    errorMessage={errors?.avatarUrl && errors?.avatarUrl?.message}
                    errorFontSize='5px'
                    clearErrors={clearErrors}
                />
                <BassicButton
                    type='submit'
                    display='flex'
                    padding='10px'
                    width='auto'
                    backgroundColor="#ffff"
                    alignItems='center'
                    justifyContent='center'
                    fontWeight={600}
                    fontSize='16px'
                    margin='20px 0 0'
                >
                    {t('button.checkout')}
                </BassicButton>
            </Form>
        </Wrapper>

    )
}

export default NewManagerForm;