import React, { memo } from "react";
import PropTypes from 'prop-types';

import {Svg} from './StyledComponents';

const SvgIcon = memo(({ width, height, viewBox, fill, path, fillHover, margin, stroke, strokeHover }) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox={viewBox}
            margin={margin}
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            fillHover={fillHover}
            stroke={stroke}
            strokeHover={strokeHover}
        >
            <path
                d={path}
            />
        </Svg>
    )
});

SvgIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string,
    margin: PropTypes.string,
    fill: PropTypes.string,
    path: PropTypes.string.isRequired,
    fillHover: PropTypes.string,
    stroke: PropTypes.string,
    strokeHover: PropTypes.string
};

SvgIcon.defaultProps = {
    width: '',
    height: '',
    viewBox: '',
    margin: '',
    fill: '',
    fillHover: '',
    stroke: '',
    strokeHover: ''
};

export default SvgIcon;