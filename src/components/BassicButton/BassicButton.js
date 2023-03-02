import React, { memo } from "react";
import PropTypes from 'prop-types';

import { Button } from "./StyledComponents";
import { colors } from "Configs/colors";

export const BassicButton = (props) => {

    const {
        type,
        display,
        alignItems,
        justifyContent,
        padding,
        width,
        minWidth,
        height,
        margin,
        backgroundColor,
        hoverBackgroundColor,
        fontSize,
        fontWeight,
        lineHeight,
        color,
        hoverColor,
        borderColor,
        hoverBorderColor,
        onClick,
        children,
        disabled
    } = props;

    return (
        <Button
            type={type}
            display={display}
            alignItems={alignItems}
            justifyContent={justifyContent}
            padding={padding}
            width={width}
            minWidth={minWidth}
            height={height}
            margin={margin}
            backgroundColor={backgroundColor}
            hoverBackgroundColor={hoverBackgroundColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            color={color}
            hoverColor={hoverColor}
            borderColor={borderColor}
            hoverBorderColor={hoverBorderColor}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

BassicButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    type: PropTypes.string,
    display: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string,
    minWidth: PropTypes.string,
    height: PropTypes.string,
    backgroundColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.number,
    lineHeight: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    borderColor: PropTypes.string,
    hoverBorderColor: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

BassicButton.defaultProps = {
    type: 'button',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    margin: '0px',
    width: '130px',
    minWidth: 'auto',
    height: '40px',
    backgroundColor: colors.background,
    hoverBackgroundColor: colors.orange,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '0px',
    color: colors.orange,
    hoverColor: colors.white,
    borderColor: colors.orange,
    hoverBorderColor: colors.white,
    onClick: () => { },
    disabled: false
}

export default memo(BassicButton);