import styled from 'styled-components';
import { colors } from 'ConfigsRoot/colors';

export const Radio = styled.div`
  width: 100%;
`;

export const RadioTitle = styled.div`
  margin: 20px 0 10px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.black};
`;

export const RadioGroup = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const RadioItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 13px;
  position: relative;
  width: 173px;
  height: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  visibility: hidden;

  &:checked ~ #check {
    border: 1px solid ${colors.orange};
  }

  &:checked ~ #check::before {
    background: ${colors.orange};
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  position: relative;
  color: ${colors.black};
  z-index: 9;
  cursor: pointer;
  font-size: 14px;
`;

export const RadioCheck = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 0;
  top: -50%;
  transform: translate(0, 50%);
  border: 1px solid ${colors.black};
  border-radius: 100%;
  transition: border .25s linear;

  &:before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100%;
    height: 5px;
    width: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    transition: background 0.25s linear;
  }
`;
