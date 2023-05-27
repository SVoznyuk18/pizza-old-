import styled, { css } from "styled-components";

import { colors } from "ConfigsRoot/colors";

export const AccordionWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 1px ${colors.grey};
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 0 20px;
  cursor: pointer;
`;

export const HeaderItem = styled.div`
  width: 25%;
  text-align: center;
`;

export const AccordionBody = styled.div`
  display: block;
  width: auto;
  height: 0px;
  padding: 0 20px 0;
  overflow: hidden;

  ${(props) =>
    props.isShowBody &&
    css`
      padding: 0 20px 20px;
      height: auto;
    `}
`;
