import React, {useEffect} from "react";
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { login } from "ActionsRoot";

import { LoginWrapper } from './StyledComponents';
import { LoginForm } from 'ComponentsRoot';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {role} = useSelector(state => state.login);
    const auth = getAuth();
    const { reset } = useForm({ mode: 'all' });


    const handleLogin = (data) => {
        const {email, password} = data;
        reset();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const {accessToken, uid} = userCredential.user;
                dispatch(login({accessToken, uid}));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    useEffect(() => {
        if (role) {
            navigate('/admin', { replace: true });
        }
    }, [role])

    return (

        <LoginWrapper>
           <LoginForm handleLogin={handleLogin}/>
        </LoginWrapper>

    
    );
}

export default Login;