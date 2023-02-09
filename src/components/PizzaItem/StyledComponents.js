import styled from "styled-components";

export const PizzaBlock = styled.div`
    min-width: 280px;
    margin-bottom: 65px;
    text-align: center;
`;

export const PizzaImg = styled.img`
    width: ${props => (props.width ? props.width : "260px")};
`;

export const Title = styled.h4`
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1%;
    margin-bottom: 20px;
`;

export const SelectorSection = styled.div`
    display: flex;
    background-color: #f3f3f3;
    border-radius: 10px;
    flex-direction: column;
    padding: 6px;
`;

export const BottomSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

`;

export const Price = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.015em;

`;

export const IconCustom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};

    svg {
        fill: ${props => props.fill};
    }

    &:hover {
        svg {
            fill: ${props => props.fillHover};
        }
    }
`;