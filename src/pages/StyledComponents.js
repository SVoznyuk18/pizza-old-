import styled from "styled-components";
import { media } from 'ConfigsRoot/constants'

export const Wrapper = styled.div`
    width: calc(100vw - 100px);
    height: 100%;
    background-color: #fff;
    margin: 50px;
    border-radius: 10px;
    max-width: 100%;

    ${media.tabletL} {
        margin: 30px;
        width: calc(100vw - 60px);
    }
    ${media.mobile} {
        margin: 10px;
        width: calc(100vw - 20px);
    }
`;

export const Container = styled.div`
    padding: 0 30px;

    ${media.tablet} {
        padding: 0px 25px;
    }
    ${media.mobile} {
        margin: 10px;
        padding: 0px 10px;
    }
`;

export const Cart = styled.div``;

export const ContainerCart = styled(Container)`
    max-width: 820px;
    margin: 90px auto;

    ${media.tablet} {
        margin: 40px auto;
    }
    ${media.mobile} {
        margin: 20px auto;
    }
`

export const Content = styled.div`
    padding: 40px 0;
    ${media.tablet} {
        padding: 20px 0;
    }
    ${media.mobileS} {
        padding: 10px 0;
    }
`;

export const ContentTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.tabletL} {
        flex-direction: column;
        align-items: flex-end;
    }
`;

export const ContentItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    ${media.tablet} {
        justify-content: center;
    }
`;

export const MainTitle = styled.h2`
    margin: 35px 0;

    ${media.tablet} {
        margin: 20px 0;
    }
`;

export const CartTitle = styled.h2`
    display: flex;
    align-items: center;
    font-size: 32px;

    ${media.tablet} {
        font-size: 24px;
    }
    ${media.mobile} {
        font-size: 24px;
    }
`;

export const CartTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CartBottom = styled.div`
    margin: 50px 0;

    ${media.tablet} {
        margin: 30px 0;
    }
    ${media.mobile} {
        margin: 15px 0;
    }
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

    ${media.mobile} {
        flex-direction: column;
        align-items: center;
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