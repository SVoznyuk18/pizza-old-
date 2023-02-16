import React from "react";
import {useForm} from 'react-hook-form';

import {Wrapper, Title, Form, ContactSection, AddressSection} from './StyledComponents';
import {BassicInput, BassicButton} from '../../../../components';

const OrderForm = () => {

    const {register, handleSubmit, formState: { errors, isValid, dirtyFields }, reset } = useForm( {mode: 'all'} );

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
                        borderRadius='20px'
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
                        borderRadius='20px'
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
                        borderRadius='20px'
                        fontSize='16px'
                        register={register}
                        validation={{required: 'Обязательное поле', pattern: {value: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, message: 'Неправильный формат email'}}}
                        dirtyFields={dirtyFields?.email}
                        errorMessagemargin='5px'
                        errorMessage={errors?.email && errors?.email?.message}
                    />
                </ContactSection>

                <Title>Address</Title>
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
                        borderRadius='20px'
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
                        borderRadius='20px'
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
                        borderRadius='20px'
                        fontSize='16px'
                        register={register}
                        validation={{required: 'Обязательное поле', min: {value: 1, message: 'Должно быть более 1'}}}
                        dirtyFields={dirtyFields?.apartment}
                        errorMessagemargin='5px'
                        errorMessage={errors?.apartment && errors?.apartment?.message}
                    />

                    {/* <BassicInput
                        label='Comment'
                        htmlFor='comment'
                        labelFontSize='16px'
                        labelMarginBottom='5px'
                        labelLineHeight='16px'

                        id='comment'
                        type='comment'
                        name='comment'
                        placeholder='Comment'
                        width='220px'
                        height='40px'
                        margin='0 0 40px'
                        padding='5px 10px 5px 10px'
                        borderRadius='20px'

                        fontSize='16px'
                    /> */}
                </AddressSection>

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
                    // disabled={!isValid}
                >
                    Замовити
                   
                </BassicButton>
            </Form>

        </Wrapper>
    )
};

export default OrderForm;