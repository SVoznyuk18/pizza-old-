import styled from "styled-components";

import { colors } from 'ConfigsRoot/colors';
import { media } from 'ConfigsRoot/constants';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 20px;

`;

export const InputWrapper = styled.div`
    display flex;
    margin-right: 10px;
    align-items: center;
    justify-content: center;

    input {
        margin: 0 5px 0 10px;
    }
`;