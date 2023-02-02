import styled from "styled-components";

export const Button = styled.button`
    display: ${props => (props.display ? props.display : 'inline-block')};
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
    background-color: ${props => props.backgroundColor};
    color: #fe5f1e;
    border-radius: 30px;
    padding: ${props => (props.padding ? props.padding : '10px 20px')} ;
    min-width: 100px;
    text-align: center;
    line-height: ${props => props.lineHeight};
    cursor: pointer;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    border: 1px solid transparent;
    border-color: #fe5f1e;

    &:hover {
        background-color: #fe5f1e;
        color: #ffff;
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