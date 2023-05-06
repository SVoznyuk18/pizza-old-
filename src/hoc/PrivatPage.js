import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivatPage = ({ children }) => {
    const location = useLocation();
    const { role, accessToken } = useSelector(state => state.login);
    console.log('PrivatPage')

    if (!role && !accessToken) {

        return <Navigate to='/login' state={{ from: location }} />
    }

    return children;
}

export default PrivatPage;