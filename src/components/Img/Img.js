import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { ImgWrapper } from './StyledComponents';

const Img = ({
  src,
  alt,
  width,
  height,
  margin,
  borderRadius,
}) => (
  <ImgWrapper
    src={src}
    alt={alt}
    width={width}
    height={height}
    margin={margin}
    borderRadius={borderRadius}
  />
);

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  borderRadius: PropTypes.string,
};

Img.defaultProps = {
  src: '',
  alt: '',
  width: '',
  height: '',
  margin: '',
  borderRadius: '',
};

export default memo(Img);
