import styled from "styled-components";

export const TableContent = styled.div`
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 0px 13px rgba(5, 142, 217, 0.12);
    border-radius: 20px;
`
export const TableHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 45px;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #323432;
`

export const TableHeaderItem = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
`;

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 45px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover {
        background-color: #E6F4FB;
    }
    
`

export const TableRowItem = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
`;