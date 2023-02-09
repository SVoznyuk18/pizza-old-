import React from "react";

import { Button } from "./StyledComponents";

export const BassicButton = ({ display, width, height, backgroundColor, alignItems, color, justifyContent, lineHeight, padding, fontWeight, fontSize, borderColor, hoverBackgroundColor, hoverColor, hoverBorderColor, onClick, children }) => {
    return (
        <Button
            display={display}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            alignItems={alignItems}
            justifyContent={justifyContent}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            fontSize={fontSize}
            padding={padding}
            borderColor={borderColor}
            color={color}
            hoverBorderColor={hoverBorderColor}
            hoverBackgroundColor={hoverBackgroundColor}
            hoverColor={hoverColor}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default BassicButton;