import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { createNewManager } from 'ActionsRoot';
import { BassicInput, BassicButton, FileUploader } from 'ComponentsRoot';
import { Wrapper, Form } from './StyledComponents';

const NewManagerForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // eslint-disable-next-line object-curly-newline
  const { register, handleSubmit, setValue, formState: { errors, dirtyFields }, reset, clearErrors } = useForm();

  const onSubmit = (data) => {
    dispatch(createNewManager(data));
    reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BassicInput
          label={t('form.labelName')}
          htmlFor="name"
          id="name"
          type="text"
          name="name"
          placeholder={t('form.placeholderName')}
          register={register}
          validation={{ required: t('form.errorMessage.required'), minLength: { value: 5, message: t('form.errorMessage.moreCharacters', { count: 5 }) } }}
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
          validation={{ required: t('form.errorMessage.required'), pattern: { value: /((0[\d]{2}))([\d-]{5,8})([\d]{2})/, message: t('form.errorMessage.wrongPhone') } }}
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
          // eslint-disable-next-line max-len
          validation={{ required: t('form.errorMessage.required'), pattern: { value: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, message: t('form.errorMessage.wrongEmail') } }}
          dirtyFields={dirtyFields?.email}
          errorMessage={errors?.email && errors?.email?.message}
        />
        <BassicInput
          label="password"
          htmlFor="password"
          id="password"
          type="password"
          name="password"
          placeholder={t('form.placeholderEmail')}
          register={register}
          validation={{ required: t('form.errorMessage.required'), minLength: { value: 5, message: t('form.errorMessage.moreCharacters', { count: 5 }) } }}
          dirtyFields={dirtyFields?.password}
          errorMessage={errors?.password && errors?.password?.message}
        />
        <BassicInput
          label="role"
          htmlFor="role"
          id="role"
          type="text"
          name="role"
          placeholder="role"
          register={register}
          validation={{ required: t('form.errorMessage.required'), minLength: { value: 4, message: t('form.errorMessage.moreCharacters', { count: 4 }) } }}
          dirtyFields={dirtyFields?.role}
          errorMessage={errors?.role && errors?.role?.message}
        />
        <FileUploader
          name="avatarUrl"
          storageFolder="UsersAvatar"
          id="avatarUrl"
          label="avatarUrl"
          htmlFor="date"
          register={register}
          setValue={setValue}
          validation={{ required: t('form.errorMessage.required') }}
          errorMessage={errors?.avatarUrl && errors?.avatarUrl?.message}
          clearErrors={clearErrors}
        />
        <BassicButton
          type="submit"
          padding="10px"
          width="auto"
          backgroundColor="#ffff"
          fontWeight={600}
          margin="20px 0 0"
        >
          {t('button.checkout')}
        </BassicButton>
      </Form>
    </Wrapper>
  );
};

export default NewManagerForm;
