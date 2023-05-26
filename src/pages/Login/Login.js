import React, {useEffect} from "react";
import { useNavigate,  } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { loginRequest } from "ActionsRoot";

import { LoginWrapper } from './StyledComponents';
import { LoginForm } from 'ComponentsRoot';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {role} = useSelector(state => state.login);

    const handleLogin = (data) => {
        const {email, password} = data;
        
        dispatch(loginRequest({userEmail: email, userPassword: password}));
    }

    useEffect(() => {
        if (role === 'admin') {
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