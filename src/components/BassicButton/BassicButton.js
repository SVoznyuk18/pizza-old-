import React, { memo } from "react";
import PropTypes from 'prop-types';

import { Button } from "./StyledComponents";
import { colors } from "../../configs/colors";

export const BassicButton = memo((props) => {
    
    const {
        display, 
        alignItems, 
        justifyContent, 
        padding, 
        width, 
        height, 
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
        children
    } = props;

    return (
        <Button
            display={display}
            alignItems={alignItems}
            justifyContent={justifyContent}
            padding={padding}
            width={width}
            height={height} A
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
        >
            {children}
        </Button>
    );
});

BassicButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    display: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    padding: PropTypes.string,
    width: PropTypes.string,
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
    onClick: PropTypes.func
};

BassicButton.defaultProps = {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    width: '130px',
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
    onClick: () => { }
}

export default BassicButton;