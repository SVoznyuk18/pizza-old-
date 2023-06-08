import styled from 'styled-components';
import { media } from 'ConfigsRoot/constants';

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

// export const Cart = styled.div``;

// export const ContainerCart = styled(Container)`
//   max-width: 820px;
//   margin: 90px auto;

//   ${media.tablet} {
//     margin: 40px auto;
//   }
//   ${media.mobile} {
//     margin: 20px auto;
//   }
// `;

export const Content = styled.div`
  padding: 40px 0;
  ${media.tablet} {
    padding: 20px 0;
  }
  ${media.mobileS} {
    padding: 10px 0;
  }
`;
