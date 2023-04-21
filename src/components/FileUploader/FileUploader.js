import React, { useRef, useState } from "react";

import { getStorage, ref as refFirebase, uploadBytes, getDownloadURL } from "firebase/storage";

import { uploadFiles } from 'UtilsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { colors } from "ConfigsRoot/colors"

import { Input, FilePickerWrapper } from './StyledComponents';
import { SvgIcon, Spiner, BassicButton, ErrorMessage } from 'ComponentsRoot';

const FileUploader = ({ name, id, register, setValue, validation, errorMessagemargin, errorMessage, errorFontSize, clearErrors  }) => {

    const [loadingFile, setLoadingFile] = useState(false);
    const [loadingError, setLoadingError] = useState(false);
    const [loadedFile, setLoadedFile] = useState(false);

    const filePicker = useRef();

    const { ref, ...rest } = register(name, validation);

    const getImgURL = async (folderFirebase, fileName) => {
        const storage = getStorage();
        const url = await getDownloadURL(refFirebase(storage, `${folderFirebase}/${fileName}`));
        setValue('avatarUrl', url);
    }

    const handlePicker = () => {
        filePicker.current.click();
    }

    const handleChange = (e) => {
        const file = e.target.files[0];
        uploadFiles(file, 'UsersAvatar', file.name, setLoadingFile, setLoadingError, setLoadedFile)
        getImgURL('UsersAvatar', file.name);
        clearErrors('avatarUrl');
    }

    return (
        <>
            <FilePickerWrapper>
                <Input
                    type='file'
                    accept='image/*, .png, .jpg, .gif, .web'
                    id={id}
                    name={name}
                    {...rest}
                    ref={(e) => {filePicker.current = e}}
                    onChange={handleChange}
                />
                <BassicButton
                    type='button'
                    display='flex'
                    padding='10px 20px'
                    width='auto'
                    height='30px'
                    margin='0 10px 0 0'
                    backgroundColor={colors.white}
                    hoverBackgroundColor={colors.orange}
                    color={colors.orange}
                    hoverColor={colors.white}
                    borderColor={colors.orange}
                    hoverBorderColor={colors.white}
                    alignItems='center'
                    justifyContent='center'
                    fontWeight={600}
                    fontSize='12px'
                    onClick={handlePicker}
                >
                    upload photo
                </BassicButton>

                <If condition={loadedFile}>
                    <SvgIcon
                        width='20px'
                        height='20px'
                        viewBox='0 0 490 490'
                        fill={colors.green}
                        path={iconSvg.check}
                    />
                </If>
                <If condition={loadingFile}>
                    <Spiner
                        width='20px'
                        height='20px'
                        viewBox='0 0 100 100'
                        fill={colors.orange}
                        style={{ display: 'inline', marginLeft: '10px' }}
                    />
                </If>
            </FilePickerWrapper>
            <ErrorMessage errorMessagemargin={errorMessagemargin} errorFontSize={errorFontSize} >{errorMessage}</ErrorMessage>
        </>
    )
}

export default FileUploader;