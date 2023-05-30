import styled from 'styled-components';
import { media } from 'ConfigsRoot/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  ${media.tablet} {
    justify-content: center;
  }
`;
