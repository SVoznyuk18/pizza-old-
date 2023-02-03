import React, {memo} from "react";

import { Icon } from "./StyledComponents";

const Img = ({src, alt, width, height, margin}) => {
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

export default memo(Img);