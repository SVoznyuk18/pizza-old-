import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivatPage = ({ children }) => {
  const location = useLocation();
  const { role, accessToken } = useSelector((state) => state.login);

  if (!role && !accessToken) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

PrivatPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};

export default PrivatPage;
