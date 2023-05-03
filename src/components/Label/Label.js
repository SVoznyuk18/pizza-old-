import React from "react";
import PropTypes from 'prop-types';

import { Label } from './StyledComponents';

const LabelComponent = ({ label, htmlFor, labelFontSize, labelMarginBottom, labelLineHeight }) => {
    return (
        <Label
            htmlFor={htmlFor}
            labelFontSize={labelFontSize}
            labelMarginBottom={labelMarginBottom}
            labelLineHeight={labelLineHeight}
        >
            {label}
        </Label>
    );
}

LabelComponent.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    labelFontSize: PropTypes.string,
    labelMarginBottom: PropTypes.string,
    labelLineHeight: PropTypes.string
}

LabelComponent.defaultProps = {
    labelFontSize: '16px',
    labelMarginBottom: '5px',
    labelLineHeight: '16px'
}

export default LabelComponent;