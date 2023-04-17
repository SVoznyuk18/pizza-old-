import React from "react";
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";

import { Form, Title } from './StyledComponents';
import { BassicInput, BassicButton } from 'ComponentsRoot';

const LoginForm = ({handleLogin}) => {

    const { t } = useTranslation();

    const { register, handleSubmit, formState: { errors, dirtyFields } } = useForm({ mode: 'all' });
    // const onSubmit = (data) => {

    //     reset();
    //     navigate(fromPage, { replace: true });
    //     dispatch(loginAdmin());
    // }

    return (
        <Form onSubmit={handleSubmit(handleLogin)}>
            <Title>Login</Title>
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
                label={t('form.labelEmail')}
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
    );
}

export default LoginForm;