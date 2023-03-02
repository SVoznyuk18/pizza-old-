import styled from "styled-components";
import { media } from 'Configs/constants';

export const CategoriesWrapper = styled.div`
    position: relative;
`;

export const CategoriesLabel = styled.div`
    display: inline-block;
    padding: 13px 0;
    border-radius: 30px;
    margin-bottom: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;
    background-color: #282828;
    color: #fff;

    &:hover{
        background-color: #282828;
    }

    &:active {
        background-color: #282828;
    }

    ${media.tabletL} {
        padding: 13px 20px;
    }
`;


export const CategoriesList = styled.ul`
    display: flex;
    
    ${media.tabletL} {
        margin-bottom: 20px;
    }
`;

export const CategoriesListPopUp = styled(CategoriesList)`
    display: ${props => props.showList ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 48px;
    right: -23px;
    background: #ffffff;
    height: ${props => props.showList ? 'auto' : '0px'};
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    overflow: hidden;
    width: 160px;
    transition: all 0.5s;
    z-index: 999;
`;

export const ListItem = styled.li`
    background-color: #f9f9f9;
    padding: 13px 30px;
    border-radius: 30px;
    margin-right: ${props => props.showList ? '10px' : '0'};
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

    &:active {
        background-color: #282828;
    }
    &:hover{
        background-color: #f4f4f4;
    }

    ${media.desktopL} {
        padding: 13px 15px;
    }
`;

export const ListItemActive = styled(ListItem)`
    background-color: #282828;
    color: #fff;

    &:hover{
        background-color: #282828;
    }
`;