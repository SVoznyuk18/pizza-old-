import styled from 'styled-components';
import { media } from 'ConfigsRoot/constants';

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
