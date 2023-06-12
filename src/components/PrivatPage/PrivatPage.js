/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-cycle */
import React, { lazy, memo } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LazyLoad } from 'ComponentsRoot';

const Admin = lazy(() => import('ContainersRoot/Admin/Admin'));
const Manager = lazy(() => import('ContainersRoot/Manager/Manager'));

const LazyAdmin = (props) => <LazyLoad component={Admin} {...props} />;
const LazyManager = (props) => <LazyLoad component={Manager} {...props} />;

const PrivatPage = ({ role }) => {
  const location = useLocation();

  switch (role) {
    case 'admin':
      return <LazyAdmin />;
    case 'manager':
      return <LazyManager />;
    default:
      return <Navigate to="/login" state={{ from: location }} />;
  }
};

PrivatPage.propTypes = {
  role: PropTypes.string,
};

PrivatPage.defaultProps = {
  role: '',
};

export default memo(PrivatPage);
