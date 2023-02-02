import styled from "styled-components";

export const CategoriesWrapper = styled.div`

`;

export const CategoriesList = styled.ul`
    display: flex;
`;

export const ListItem = styled.li`
    background-color: #f9f9f9;
    padding: 13px 30px;
    border-radius: 30px;
    margin-right: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

    &:active {
        background-color: #282828;
    }
    &:hover{
        background-color: #f4f4f4;
    }
`;

export const ListItemActive = styled(ListItem)`
    background-color: #282828;
    color: #fff;

    &:hover{
        background-color: #282828;
    }
`;