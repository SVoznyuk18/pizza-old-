import styled from 'styled-components';

import { media } from 'ConfigsRoot/constants';

export const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};

    ${media.mobileS} {
        width: 100%;
    }
`;

export const Input = styled.input`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    padding: ${(props) => props.padding};
    border: solid 1px ${(props) => props.borderColor};;
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '15px')};
    font-size: ${(props) => props.fontSize};

    ${media.mobile} {
        height: 30px;
    }

    ${media.mobileS} {
        width: 100%;
        height: 25px;
        font-size: 12px;
    }
`;
