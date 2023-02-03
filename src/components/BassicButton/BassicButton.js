import React from "react";

import {Button} from "./StyledComponents";

export const BassicButton = ({display, width, height, backgroundColor, alignItems, justifyContent, lineHeight, padding, children}) => {
    return(
        <Button 
            display={display} 
            width={width}
            height={height}
            backgroundColor={backgroundColor} 
            alignItems={alignItems} 
            justifyContent={justifyContent} 
            lineHeight={lineHeight} 
            padding={padding}
        >
            {children}
        </Button>
    );
};

export default BassicButton;