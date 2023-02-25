import styled from "styled-components";
import {media} from '../../configs/constants';

export const SortWrapper = styled.div`
    position: relative;
`;

export const SortLabel = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin-right: 8px;
    }

    b {
        margin-right: 8px;
    }

    span {
        color: $orange;
        border-bottom: 1px dashed $orange;
        cursor: pointer;
    }
`;

export const SortPopUp = styled.div`
    display: ${props => (props.activePopUp ? 'block' : 'none')};
    position: absolute;
    right: 0;
    margin-top: 15px;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 0;
    width: 160px;

`;

export const SortList = styled.ul`
    overflow: hidden;
`;

export const SortItem = styled.li`
    padding: 12px 20px;
    cursor: pointer;
    background: ${props => (props.sortActive ? '#fedfd2' : 'transparent')};
    font-weight: ${props => (props.sortActive ? 'bold' : 'regular')};
    color: ${props => (props.sortActive ? '#fe5f1e' : 'inherit')};

    &:hover {
        background: #fedfd2;
    }
`;