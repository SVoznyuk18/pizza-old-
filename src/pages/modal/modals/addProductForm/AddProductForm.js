import React from "react";
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

import { Wrapper, Form } from './StyledComponents';
import { AVALIABLE_SIZES, AVALIABLE_TYPES } from 'ConfigsRoot/constants';
import { handleToggleModal, createNewProduct } from 'ActionsRoot';

import { BassicInput, BassicButton, FileUploader, CheckboxInput } from 'ComponentsRoot';



const AddProductForm = ({ }) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue, formState: { errors, dirtyFields }, reset, clearErrors } = useForm();

    const onSubmit = (data) => {

        dispatch(createNewProduct(data));
        reset();
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <BassicInput
                label='name'
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
                validation={{ required: t('form.errorMessage.required') }}
                dirtyFields={dirtyFields?.name}
                errorMessagemargin='5px'
                errorMessage={errors?.name && errors?.name?.message}
                required
            />

            <BassicInput
                label='category'
                htmlFor='category'
                labelFontSize='16px'
                labelMarginBottom='5px'
                labelLineHeight='16px'
                id='catagory'
                type='text'
                name='category'
                placeholder={t('form.placeholderName')}
                width='100%'
                height='40px'
                margin='0 0 5px'
                padding='5px 10px 5px 10px'
                borderRadius='15px'
                fontSize='16px'
                register={register}
                validation={{ required: t('form.errorMessage.required') }}
                dirtyFields={dirtyFields?.category}
                errorMessagemargin='5px'
                errorMessage={errors?.category && errors?.category?.message}
                required
            />
            <BassicInput
                label='price'
                htmlFor='price'
                labelFontSize='16px'
                labelMarginBottom='5px'
                labelLineHeight='16px'
                id='price'
                type='text'
                name='price'
                placeholder={t('form.placeholderName')}
                width='100%'
                height='40px'
                margin='0 0 5px'
                padding='5px 10px 5px 10px'
                borderRadius='15px'
                fontSize='16px'
                register={register}
                validation={{ required: t('form.errorMessage.required') }}
                dirtyFields={dirtyFields?.price}
                errorMessagemargin='5px'
                errorMessage={errors?.price && errors?.price?.message}
                required
            />

            <BassicInput
                label='rating'
                htmlFor='rating'
                labelFontSize='16px'
                labelMarginBottom='5px'
                labelLineHeight='16px'
                id='rating'
                type='text'
                name='rating'
                placeholder={t('form.placeholderName')}
                width='100%'
                height='40px'
                margin='0 0 5px'
                padding='5px 10px 5px 10px'
                borderRadius='15px'
                fontSize='16px'
                register={register}
                validation={{ required: t('form.errorMessage.required') }}
                dirtyFields={dirtyFields?.rating}
                errorMessagemargin='5px'
                errorMessage={errors?.rating && errors?.rating?.message}
                required
            />

            <CheckboxInput
                name='types'
                setValue={setValue}
                validation={{ required: t('form.errorMessage.required') }}
                register={register}
                clearErrors={clearErrors}
                checboxItems={AVALIABLE_TYPES}
                label='Pizza types'
                labelFontSize='16px'
                labelMarginBottom='10px'
                labelLineHeight='16px'
                errorMessage={errors?.types && errors?.types?.message}
            />

            <CheckboxInput
                name='sizes'
                setValue={setValue}
                validation={{ required: t('form.errorMessage.required') }}
                register={register}
                clearErrors={clearErrors}
                checboxItems={AVALIABLE_SIZES}
                label='Pizza sizes'
                labelFontSize='16px'
                labelMarginBottom='10px'
                labelLineHeight='16px'
                errorMessage={errors?.sizes && errors?.sizes?.message}
            />

            <FileUploader
                name='imageUrl'
                storageFolder='productsImg'
                id='imageUrl'
                label='productImage'
                htmlFor='productImage'
                labelFontSize='16px'
                labelMarginBottom='5px'
                labelLineHeight='16px'
                register={register}
                setValue={setValue}
                validation={{ required: t('form.errorMessage.required') }}
                errorMessagemargin='5px'
                errorMessage={errors?.imageUrl && errors?.imageUrl?.message}
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
    )
}

export default AddProductForm;