import styled from "styled-components";


export const Wrapper = styled.div`
    width: calc(100vw - 100px);
    height: 100%;
    background-color: #fff;
    margin: 50px auto;
    border-radius: 10px;
    max-width: 1400px;
`;

export const Container = styled.div`
    width: $container-width;
    margin: 0 auto;
`;

export const Cart = styled.div``;

export const ContainerCart = styled(Container)`
    max-width: 820px;
    margin: 90px auto;
`

export const Content = styled.div`
    padding: 40px 0;
`;

export const ContentItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
`;

export const CartTitle = styled.h2`
    display: flex;
    align-items: center;
    font-size: 32px;
`;

export const CartTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CartBottom = styled.div`
    margin: 50px 0;
`;

export const CartBottomDetails = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-size: 22px;

        &:last-of-type {
          b {
            color: $orange;
          }
        }
    }
`;

export const CartButtonSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`;


export const ClearCart = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
        display: inline-block;
        margin-left: 7px;
        color: #b6b6b6;
        font-size: 18px;
    }

    &:hover {
        svg {
          path {
            stroke: #373737;
          }
        }
        span {
          color: #373737;
        }
    }
`;

export const IconCustom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};

    svg {
        fill: ${props => props.fill};
        path {
            stroke: ${props => props.stroke};
        };
    }

    &:hover {
        svg {
            fill: ${props => props.fillHover};
            path {
                stroke: ${props => props.strokeHover};
            };
        }
    }
`;


