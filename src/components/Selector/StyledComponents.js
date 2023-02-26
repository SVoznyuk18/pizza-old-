import styled from "styled-components";
import { media } from '../../configs/constants';
export const List = styled.ul`
    margin: 5px;
    display: flex;
    flex: 1;
`;

export const ListItem = styled.li`
    padding: 8px;
    flex: 1;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    ${media.tablet} {
        font-size: 20px;
    }
    ${media.mobile} {
        font-size: 16px;
    }
`;

export const ListItemActive = styled(ListItem)`
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    cursor: auto;
`;

export const ListItemDisable = styled(ListItem)`
    opacity: 0.4;
    pointer-events: none;
`;