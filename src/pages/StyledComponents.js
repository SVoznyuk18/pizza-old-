import styled from "styled-components";

export const IconCustom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};

    svg {
        fill: ${props => props.fill};
        path {
            stroke: ${props => props.stroke};
        };
    }

    &:hover {
        svg {
            fill: ${props => props.fillHover};
            path {
                stroke: ${props => props.strokeHover};
            };
        }
    }
`;


