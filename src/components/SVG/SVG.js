import React, { memo } from "react";
import PropTypes from 'prop-types';

const SVG = memo(({ width, height, viewBox, fill, path }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"

        >
            <path
                fill={fill}
                d={path}
            />
        </svg>
    )
});

SVG.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string,
    fill: PropTypes.string,
    path: PropTypes.string.isRequired
};

SVG.defaultProps = {
    width: '',
    height: '',
    viewBox: '',
    fill: '',
};

export default SVG;