import React from "react";

const SVG = ({width, height, viewBox, fill, path}) => {
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
}

export default SVG;