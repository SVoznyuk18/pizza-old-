/* eslint-disable object-curly-newline */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { placeNewOrder } from 'ActionsRoot';
import { BassicInput, BassicButton, TimePicker, DatePicker } from 'ComponentsRoot';
import { Wrapper, Title, Form, ContactSection, AddressSection, TimeSection } from './StyledComponents';

const PlaceNewOrderForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, control, formState: { errors, dirtyFields }, reset } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    dispatch(placeNewOrder(data));
    reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>{t('form.titleContacts')}</Title>
        <ContactSection>
          <BassicInput
            label={t('form.labelName')}
            htmlFor="name"
            id="name"
            type="text"
            name="name"
            placeholder={t('form.placeholderName')}
            register={register}
            validation={
              {
                required: t('form.errorMessage.required'),
                minLength: { value: 5, message: t('form.errorMessage.moreCharacters', { count: 5 }) },
              }
            }
            dirtyFields={dirtyFields?.name}
            errorMessage={errors?.name && errors?.name?.message}
            required
          />
          <BassicInput
            label={t('form.labelPhone')}
            htmlFor="phone"
            id="phone"
            type="tel"
            inputmode="tel"
            name="phone"
            placeholder={t('form.placeholderPhone')}
            register={register}
            validation={
              {
                required: t('form.errorMessage.required'),
                pattern: { value: /((0[\d]{2}))([\d-]{5,8})([\d]{2})/, message: t('form.errorMessage.wrongPhone') },
              }
            }
            dirtyFields={dirtyFields?.phone}
            errorMessage={errors?.phone && errors?.phone?.message}
          />
          <BassicInput
            label={t('form.labelEmail')}
            htmlFor="email"
            id="email"
            type="email"
            name="email"
            placeholder={t('form.placeholderEmail')}
            register={register}
            validation={
              {
                required: t('form.errorMessage.required'),
                pattern: { value: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, message: t('form.errorMessage.wrongEmail') },
              }
            }
            dirtyFields={dirtyFields?.email}
            errorMessage={errors?.email && errors?.email?.message}
          />
        </ContactSection>
        <Title>{t('form.titleAddress')}</Title>
        <AddressSection>
          <BassicInput
            label={t('form.labelStreet')}
            htmlFor="street"
            id="street"
            type="text"
            name="street"
            placeholder={t('form.placeholderStree')}
            register={register}
            validation={
              {
                required: t('form.errorMessage.required'),
                minLength: { value: 5, message: t('form.errorMessage.moreCharacters', { count: 5 }) },
              }
            }
            dirtyFields={dirtyFields?.street}
            errorMessage={errors?.street && errors?.street?.message}
          />
          <BassicInput
            label={t('form.labelHouse')}
            htmlFor="house"
            id="house"
            type="text"
            name="house"
            placeholder={t('form.placeholderHouse')}
            register={register}
            validation={
              {
                required: t('form.errorMessage.required'),
                min: { value: 1, message: t('form.errorMessage.moreNumber', { count: 1 }) },
              }
            }
            dirtyFields={dirtyFields?.house}
            errorMessage={errors?.house && errors?.house?.message}
          />
          <BassicInput
            label={t('form.labelApartment')}
            htmlFor="apartment"
            id="apartment"
            type="number"
            name="apartment"
            placeholder={t('form.placeholderApartment')}
            register={register}
            validation={
              {
                required: t('form.errorMessage.required'),
                min: { value: 1, message: t('form.errorMessage.moreNumber', { count: 1 }) },
              }
            }
            dirtyFields={dirtyFields?.apartment}
            errorMessage={errors?.apartment && errors?.apartment?.message}
          />
        </AddressSection>
        <Title>{t('form.titleTime')}</Title>
        <TimeSection>
          <TimePicker
            label={t('form.labelTime')}
            htmlFor="time"
            id="time"
            type="text"
            name="time"
            placeholder={t('form.placeholderTime')}
            start="00:00"
            end="23:59"
            step={30}
            register={register}
            setValue={setValue}
            validation={{ required: t('form.errorMessage.required') }}
            dirtyFields={dirtyFields?.time}
            errorMessage={errors?.time && errors?.time?.message}
          />
          <DatePicker
            label={t('form.labelDate')}
            htmlFor="date"
            labelFontSize="16px"
            labelMarginBottom="5px"
            labelLineHeight="16px"
            name="date"
            id="date"
            width="150px"
            height="40px"
            margin="0 0 5px"
            padding="5px 10px 5px 10px"
            borderRadius="15px"
            fontSize="16px"
            placeholder={t('form.placeholderDate')}
            control={control}
            register={register}
            validation={{ required: t('form.errorMessage.required') }}
            dirtyFields={dirtyFields?.date}
            errorMessage={errors?.date && errors?.date?.message}
          />
        </TimeSection>
        <BassicButton
          type="submit"
          padding="10px 20px"
          width="130px"
          backgroundColor="#ffff"
          alignItems="center"
          justifyContent="center"
          fontWeight={600}
        >
          {t('button.checkout')}
        </BassicButton>
      </Form>
    </Wrapper>
  );
};

export default PlaceNewOrderForm;
