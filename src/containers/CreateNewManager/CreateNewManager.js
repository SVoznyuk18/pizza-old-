import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { addPizzaToCart } from 'ActionsRoot';

import {Table, BassicButton, SVG} from 'ComponentsRoot';
import {ButtonSection} from './StyledComponents';
import iconSvg from 'AssetsRoot/svg/iconSvg';

const CreateNewManager = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    return(
    
        <>
        <ButtonSection>
            <BassicButton
                    display='flex'
                    padding='10px 20px'
                    width='130px'
                    backgroundColor="#ffff"
                    alignItems='center'
                    justifyContent='space-evenly'
                    fontWeight={600}
                    fontSize='18px'
                    onClick={()=> {}}
                >
                   
                        <SVG
                            width='12'
                            height='12'
                            viewBox='0 0 10 10'
                            fill='#EB5A1E'
                            path={iconSvg.plus}
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
