import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { handleToggleModal } from 'ActionsRoot';
import { MODAL } from 'ConfigsRoot/constants';

import {Table, BassicButton, SvgIcon, FileUploader} from 'ComponentsRoot';
import {ButtonSection} from './StyledComponents';
import iconSvg from 'AssetsRoot/svg/iconSvg';

const CreateNewManager = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    return(
    
        <>
        <ButtonSection>
            {/* <FileUploader/> */}
            <BassicButton
                    display='flex'
                    padding='10px'
                    width='auto'
                    backgroundColor="#ffff"
                    alignItems='center'
                    justifyContent='space-evenly'
                    fontWeight={600}
                    fontSize='18px'
                    onClick={() => dispatch(handleToggleModal(true, MODAL.NEW_MANAGER_FORM))}
                >
                    <SvgIcon
                        width='14px'
                        height='14px'
                        viewBox='0 0 9.6 9.6'
                        fill='#EB5A1E'
                        path={iconSvg.plus}
                        margin='0 5px 0 0'
                    />
                    {t('button.add')}
                </BassicButton>

        </ButtonSection>
        <Table/>
        </>
        
    )
}

export default CreateNewManager;

// 1. Зарегистрируйте новых пользователей
// https://firebase.google.com/docs/auth/web/password-auth?hl=ru
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
//     получаем  accessToken, uid

//     2. загрузка фото в сторедж и получение ссылки на файл

//     https://firebase.google.com/docs/storage/web/upload-files?hl=ru

//     3. собираем данные, создаем в коллккции users  документ с uid  и поле array user_Shema  {email, name, id, userAvatar, role}

//     получаем accessToken, uid с п1 - получаем ссылку на фото с п 2. - сохраняем user в firebase 

//     https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ru

//     import { doc, setDoc, Timestamp } from "firebase/firestore"; 

//     const docData = {
//         userShema: {
//             email: '',
//             name: '',
//             id: uid,
//             userAvatar: '',
//             role: ''
//         }
        
//     }
// await setDoc(doc(db, "autorization", uid), docData);
