import styled from 'styled-components';
import { colors } from 'ConfigsRoot/colors';
import { media } from 'ConfigsRoot/constants';

export const PizzaBlock = styled.div`
  position: relative;
  width: 350px;
  min-width: 260px;
  margin: 0 10px 65px 10px;
  text-align: center;
  border-radius: 15px;
  padding: 15px 10px;
  box-shadow: 0px 0px 10px 5px ${colors.grey};

  ${media.tabletL} {
    width: 300px;
    margin: 0 10px 40px 10px;
  }

  ${media.tablet} {
    width: 100%;
    margin: 0 0 30px 0;
  }
`;

export const PizzaImg = styled.img`
  width: ${(props) => (props.width ? props.width : '260px')};
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 1%;
  margin-bottom: 20px;

  ${media.tablet} {
    font-size: 32px;
  }
  ${media.mobile} {
    font-size: 18px;
  }
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
  justify-content: space-around;
  margin-top: 20px;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;

  ${media.mobile} {
    font-size: 18px;
  }
`;

export const EditWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  cursor: pointer;
  opacity: 0;
  border-radius: 15px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    opacity: 1;
  }
`;
