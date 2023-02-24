import styled from "styled-components";
import { colors } from "../../configs/colors";

export const LanguagesWrapper = styled.div`
    position: relative;
    margin-left: 15px;
    width: 100px;
`;
export const MenuHeader = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px 5px;
    width: 100%;
    height: 40px;
    border: 1px solid ${colors.black};
    border-radius: 15px;
    cursor: pointer;
`;

export const MenuContent = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 42px;
    left: 0;
    width: 100px;
    background-color: ${colors.greyLine};
    height: ${props => props.toggleMenu ? 'auto' : '0px'};
    border-radius: 15px;
    transition: height 0.5s;
    overflow: hidden;
    z-index: 999;
`;

export const MenuItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px 5px;
    border-bottom: 2px solid ${colors.grey};
    cursor: pointer;

    &:last-child {
        border-bottom: 0px;
    }
`;

export const Img = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-right: 15px;
`;

export const Title  = styled.div`
    font-size: 16px;

`;