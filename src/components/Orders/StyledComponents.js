import styled from 'styled-components';

import { colors } from 'ConfigsRoot/colors';

export const OrdersContainer = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 0 30px 0;
`;

export const Order = styled.div``;

export const OrderInfoSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const OrderInfoItem = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const OrderCartSection = styled.section``;

export const OrderPriceSection = styled.section`
  display: flex;
  justify-content: ;

  span {
    font-size: 16px;

    &:last-of-type {
      margin-left: 20px;
      b {
        color: ${colors.orange};
      }
    }
  }
`;
