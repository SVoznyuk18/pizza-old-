import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'ConfigsRoot/colors';
import { media } from 'ConfigsRoot/constants';

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #f6f6f6;
  padding: 40px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tabletL} {
      padding: 25px 30px;
  }
  ${media.tablet} {
      padding: 15px 25px;
      width: 100%;
  }
  
  ${media.mobile} {
      padding: 10px;
  }
`;

export const Cost = styled.div`
  font-size: 16px;
  color: ${colors.black};
  font-weight: 600;

  ${media.mobile} {
      font-size: 14px;
  }
`;

export const Amount = styled.div`
  font-size: 16px;
  color: ${colors.black};
  font-weight: 600;

  ${media.mobile} {
      font-size: 14px;
  }
`;

export const HeaderLogoWrapper = styled(Link)`
  display: flex;  

  ${media.tablet} {
    width: 0px;
    height: 0px;
    overflow: hidden;
  }
`;

export const HeaderLogoDescription = styled.div`
  margin-left: 10px;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #181818;
`;

export const HeaderSubTitle = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #7B7B7B;
`;

export const Delimiter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin: 0 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tablet} {
    width: 100%;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`;

export const UserName = styled.h4`
  font-size: 16px;
`;
