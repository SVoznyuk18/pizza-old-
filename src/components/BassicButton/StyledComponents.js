import styled from "styled-components";

export const Button = styled.button`
    display: ${props => (props.display ? props.display : 'inline-block')};
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    border-radius: 30px;
    padding: ${props => (props.padding ? props.padding : '10px 20px')} ;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    height: ${props => props.height};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    text-align: center;
    line-height: ${props => props.lineHeight};
    cursor: pointer;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    border: 1px solid transparent;
    border-color: ${props => props.borderColor};
    margin: ${props => props.margin};

    &:hover {
        background-color: ${props => props.hoverBackgroundColor};
        color: ${props => props.hoverColor};
        border-color: ${props => props.hoverBorderColor}; 
        svg {
            fill: #ffff;
        }
    }
    
    &:active {
        background-color: #f24701;
        color: #ffff;
        transform: translateY(1px);
    }

    span {
        font-weight: 600;
        font-size: 16px;
    }
`;