/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { Spiner } from 'ComponentsRoot';

const LazyLoad = ({ component: Component, ...rest }) => (
  <Suspense fallback={<Spiner />}>
    <Component {...rest} />
  </Suspense>
);

LazyLoad.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};

export default LazyLoad;
