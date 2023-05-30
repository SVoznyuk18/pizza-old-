import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { getStorage, ref as refFirebase, getDownloadURL } from 'firebase/storage';
import { uploadFiles } from 'UtilsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { colors } from 'ConfigsRoot/colors';
// eslint-disable-next-line import/no-cycle
import {
  SvgIcon,
  Spiner,
  BassicButton,
  ErrorMessage,
  Label,
} from 'ComponentsRoot';
import { Input, FilePickerWrapper } from './StyledComponents';

const FileUploader = ({
  htmlFor,
  labelFontSize,
  labelMarginBottom,
  labelLineHeight,
  label,
  name,
  storageFolder,
  id,
  register,
  setValue,
  validation,
  errorMessagemargin,
  errorMessage,
  errorFontSize,
  clearErrors,
}) => {
  const [loadingFile, setLoadingFile] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loadingError, setLoadingError] = useState(false);
  const [loadedFile, setLoadedFile] = useState(false);

  const filePicker = useRef();

  const getImgURL = async (folderFirebase, fileName) => {
    const storage = getStorage();
    const url = await getDownloadURL(refFirebase(storage, `${folderFirebase}/${fileName}`));
    setValue(name, url);
  };

  const handlePicker = () => {
    filePicker.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    uploadFiles(file, storageFolder, file.name, setLoadingFile, setLoadingError, setLoadedFile);
    getImgURL(storageFolder, file.name);
    clearErrors(name);
  };

  return (
    <>
      <FilePickerWrapper>
        <Label
          htmlFor={htmlFor}
          labelFontSize={labelFontSize}
          labelMarginBottom={labelMarginBottom}
          labelLineHeight={labelLineHeight}
          label={label}
        />
        <Input
          type="file"
          accept="image/*, .png, .jpg, .gif, .web"
          id={id}
          name={name}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(name, validation)}
          ref={filePicker}
          onChange={handleChange}
        />
        <BassicButton
          type="button"
          padding="10px 20px"
          width="auto"
          height="30px"
          margin="0 10px 0 0"
          backgroundColor={colors.white}
          hoverBackgroundColor={colors.orange}
          color={colors.orange}
          hoverColor={colors.white}
          borderColor={colors.orange}
          hoverBorderColor={colors.white}
          alignItems="center"
          justifyContent="center"
          fontWeight={600}
          fontSize="12px"
          onClick={handlePicker}
        >
          upload photo
        </BassicButton>
        <If condition={loadedFile}>
          <SvgIcon
            width="20px"
            height="20px"
            viewBox="0 0 490 490"
            fill={colors.green}
            path={iconSvg.check}
          />
        </If>
        <If condition={loadingFile}>
          <Spiner
            width="20px"
            height="20px"
            viewBox="0 0 100 100"
            fill={colors.orange}
            style={{ display: 'inline', marginLeft: '10px' }}
          />
        </If>
      </FilePickerWrapper>
      <ErrorMessage
        errorMessagemargin={errorMessagemargin}
        errorFontSize={errorFontSize}
      >
        {errorMessage}
      </ErrorMessage>
    </>
  );
};

FileUploader.propTypes = {
  htmlFor: PropTypes.string,
  labelFontSize: PropTypes.string,
  labelMarginBottom: PropTypes.string,
  labelLineHeight: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  storageFolder: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.func,
  setValue: PropTypes.func,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
  errorMessagemargin: PropTypes.string,
  errorMessage: PropTypes.string,
  errorFontSize: PropTypes.string,
  clearErrors: PropTypes.func,
};

FileUploader.defaultProps = {
  htmlFor: '',
  labelFontSize: '16px',
  labelMarginBottom: '5px',
  labelLineHeight: '16px',
  label: '',
  name: '',
  storageFolder: '',
  id: '',
  register: () => {},
  setValue: () => {},
  errorMessagemargin: '5px',
  errorMessage: '',
  errorFontSize: '5px',
  clearErrors: () => {},
};

export default FileUploader;
