import React from "react";
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from "react-i18next";

import { Wrapper, Form } from './StyledComponents';
import { AVALIABLE_SIZES, AVALIABLE_TYPES } from 'ConfigsRoot/constants';

import { BassicInput, BassicButton, FileUploader, CheckboxInput } from 'ComponentsRoot';

const AddProductForm = ({ }) => {

    const { t } = useTranslation();
    const { register, handleSubmit, setValue, formState: { errors, dirtyFields }, reset, clearErrors } = useForm();

    const onSubmit = (data) => {

        console.log(data);

        // dispatch(createNewManager(data));
        reset();
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <CheckboxInput
                name='types'
                setValue={setValue}
                validation={{ required: t('form.errorMessage.required') }}
                register={register}
                clearErrors={clearErrors}
                checboxItems={AVALIABLE_TYPES}
            />

            <CheckboxInput
                name='sizes'
                setValue={setValue}
                validation={{ required: t('form.errorMessage.required') }}
                register={register}
                clearErrors={clearErrors}
                checboxItems={AVALIABLE_SIZES}
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