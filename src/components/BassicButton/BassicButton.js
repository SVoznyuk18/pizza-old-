import React from "react";

import {Button} from "./StyledComponents";

export const BassicButton = ({display, backgroundColor, alignItems, justifyContent, lineHeight, padding, children}) => {
    return(
        <Button 
            display={display} 
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