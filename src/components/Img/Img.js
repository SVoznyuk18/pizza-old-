import React, { memo } from "react";
import PropTypes from 'prop-types';

import { Icon } from "./StyledComponents";

const Img = ({ src, alt, width, height, margin }) => {
    return (
        <Icon
            src={src}
            alt={alt}
            width={width}
            height={height}
            margin={margin}
        />
    );
}

Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string
}

Img.defaultProps = {
    src: '',
    alt: '',
    width: '',
    height: '',
    margin: ''
}

export default memo(Img);