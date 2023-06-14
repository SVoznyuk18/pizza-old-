import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { ImgWrapper } from './StyledComponents';

const Img = ({
  src,
  errorImg,
  loadingImg,
  alt,
  width,
  height,
  margin,
  borderRadius,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageOnLoad = (e) => {
    if (e.currentTarget.src) setIsLoading(false);
  };

  const imageOnError = (e) => {
    e.currentTarget.src = errorImg;
  };

  return (
    <ImgWrapper
      src={isLoading ? loadingImg : src}
      alt={alt}
      width={width}
      height={height}
      margin={margin}
      borderRadius={borderRadius}
      onLoad={imageOnLoad}
      onError={imageOnError}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string,
  errorImg: PropTypes.string,
  loadingImg: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  borderRadius: PropTypes.string,
};

Img.defaultProps = {
  src: '',
  errorImg: '',
  loadingImg: '',
  alt: '',
  width: '',
  height: '',
  margin: '',
  borderRadius: '',
};

export default memo(Img);
