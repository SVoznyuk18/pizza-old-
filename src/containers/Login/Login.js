import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginRequest } from 'ActionsRoot';
import { LoginForm } from 'ComponentsRoot';
import { LoginWrapper } from './StyledComponents';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.login);

  const handleLogin = (data) => {
    const { email, password } = data;
    dispatch(loginRequest({ userEmail: email, userPassword: password }));
  };

  useEffect(() => {
    if (role === 'admin') {
      navigate('/admin', { replace: true });
    }
    if (role === 'manager') {
      navigate('/manager', { replace: true });
    }
  }, [role]);

  return (
    <LoginWrapper>
      <LoginForm handleLogin={handleLogin} />
    </LoginWrapper>
  );
};

export default Login;
