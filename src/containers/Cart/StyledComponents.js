import styled from 'styled-components';
import { media } from 'ConfigsRoot/constants';

export const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const CartList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  ${media.tablet} {
    justify-content: center;
  }
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
