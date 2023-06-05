import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { AVALIABLE_SIZES, AVALIABLE_TYPES } from 'ConfigsRoot/constants';
import { createNewProduct } from 'ActionsRoot';
// eslint-disable-next-line object-curly-newline
import { BassicInput, BassicButton, FileUploader, CheckboxInput } from 'ComponentsRoot';
import { Form } from './StyledComponents';

const AddProductForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // eslint-disable-next-line object-curly-newline
  const { register, handleSubmit, setValue, formState: { errors, dirtyFields }, reset, clearErrors } = useForm();

  const onSubmit = (data) => {
    dispatch(createNewProduct(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <BassicInput
        label="name"
        htmlFor="name"
        id="name"
        type="text"
        name="name"
        placeholder={t('form.placeholderName')}
        register={register}
        validation={{ required: t('form.errorMessage.required') }}
        dirtyFields={dirtyFields?.name}
        errorMessage={errors?.name && errors?.name?.message}
        required
      />
      <BassicInput
        label="category"
        htmlFor="category"
        id="catagory"
        type="text"
        name="category"
        placeholder={t('form.placeholderName')}
        register={register}
        validation={{ required: t('form.errorMessage.required') }}
        dirtyFields={dirtyFields?.category}
        errorMessage={errors?.category && errors?.category?.message}
        required
      />
      <BassicInput
        label="price"
        htmlFor="price"
        id="price"
        type="text"
        name="price"
        placeholder={t('form.placeholderName')}
        register={register}
        validation={{ required: t('form.errorMessage.required') }}
        dirtyFields={dirtyFields?.price}
        errorMessage={errors?.price && errors?.price?.message}
        required
      />
      <BassicInput
        label="rating"
        htmlFor="rating"
        id="rating"
        type="text"
        name="rating"
        placeholder={t('form.placeholderName')}
        fontSize="16px"
        register={register}
        validation={{ required: t('form.errorMessage.required') }}
        dirtyFields={dirtyFields?.rating}
        errorMessage={errors?.rating && errors?.rating?.message}
        required
      />
      <CheckboxInput
        name="types"
        setValue={setValue}
        validation={{ required: t('form.errorMessage.required') }}
        register={register}
        clearErrors={clearErrors}
        checboxItems={AVALIABLE_TYPES}
        label="Pizza types"
        errorMessage={errors?.types && errors?.types?.message}
      />
      <CheckboxInput
        name="sizes"
        setValue={setValue}
        validation={{ required: t('form.errorMessage.required') }}
        register={register}
        clearErrors={clearErrors}
        checboxItems={AVALIABLE_SIZES}
        label="Pizza sizes"
        errorMessage={errors?.sizes && errors?.sizes?.message}
      />
      <FileUploader
        name="imageUrl"
        storageFolder="productsImg"
        id="imageUrl"
        label="productImage"
        htmlFor="productImage"
        register={register}
        setValue={setValue}
        validation={{ required: t('form.errorMessage.required') }}
        errorMessage={errors?.imageUrl && errors?.imageUrl?.message}
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
  );
};

export default AddProductForm;
