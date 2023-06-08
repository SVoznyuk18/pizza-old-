import styled from 'styled-components';

import { colors } from 'ConfigsRoot/colors';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const Form = styled.form`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  padding: 80px 50px;
  box-shadow: 0px 0px 10px 5px ${colors.grey};
`;
