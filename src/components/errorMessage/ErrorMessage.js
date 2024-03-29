import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, ErrorLabel } from './StyledComponents';

const ErrorMessage = ({ errorMessagemargin, children }) => (
  <Wrapper margin={errorMessagemargin}>
    <ErrorLabel>{children}</ErrorLabel>
  </Wrapper>
);

ErrorMessage.propTypes = {
  errorMessagemargin: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

ErrorMessage.defaultProps = {
  errorMessagemargin: '',
};

export default memo(ErrorMessage);
