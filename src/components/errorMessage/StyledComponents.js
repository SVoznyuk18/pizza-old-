import styled from "styled-components";

import { colors } from "Configs/colors";

export const Wrapper = styled.div`
    display: inline;
    margin-top: 5px;
`;

export const ErrorLabel = styled.h4`
    font-size: 12px;
    font-weight: 100;
    color: ${colors.errorMessage};
`;