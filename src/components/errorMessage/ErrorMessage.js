import React from "react";

import {Wrapper, ErrorLabel} from './StyledComponents';

const ErrorMessage = ({errorMessagemargin, children}) => {
    return(
        <Wrapper margin={errorMessagemargin}>
            <ErrorLabel >{children}</ErrorLabel>
        </Wrapper>
    );
}

export default ErrorMessage;