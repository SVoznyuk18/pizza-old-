import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h3`

`;

export const ContactSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
`;

export const AddressSection = styled(ContactSection)`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
`;

export const Form = styled.form`
    width: 100%
`;

