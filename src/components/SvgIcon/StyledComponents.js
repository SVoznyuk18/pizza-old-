import styled from "styled-components";


export const Svg = styled.svg`
    margin: ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    fill: ${props => props.fill};

    path {
        stroke: ${props => props.stroke};
    };
    
    &:hover {
        fill: ${props => props.fillHover};
        path {
            stroke: ${props => props.strokeHover};
        };
    }
`;