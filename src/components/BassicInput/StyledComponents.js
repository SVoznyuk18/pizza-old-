import styled from 'styled-components';

export const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin: ${props => props.margin};
    width: ${props => props.width};
`;

export const Label = styled.div`
    display: inline;
    font-size: ${props => props.labelFontSize};
    margin-bottom: ${props => props.labelMarginBottom};
    line-height: ${props => props.labelLineHeight};
    font-weight: 600;
`;

export const Input = styled.input`
    height: ${props => props.height};
    width: ${props => props.width};
    padding: ${props => props.padding};
    border: solid 1px ${props => props.borderColor};;
    border-radius: ${props => props.borderRadius ? props.borderRadius  : '15px'};
    font-size: ${props => props.fontSize}
`;