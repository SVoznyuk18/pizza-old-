import styled from 'styled-components';
import { media } from 'ConfigsRoot/constants';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 10px 0 10px 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;

  ${media.mobile} {
    margin: 0;
    font-size: 16px;
    line-height: 16px;
  }

  ${media.mobileS} {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const ContactSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
`;

export const AddressSection = styled(ContactSection)`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  ${media.mobileS} {
    flex-direction: column;
  }
`;

export const TimeSection = styled(AddressSection)`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;

  ${media.mobileS} {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border: solid 1px ${(props) => props.borderColor};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '15px')};
  font-size: ${(props) => props.fontSize};
`;

export const DatePickerWrapper = styled.div`
  width: ${(props) => props.width};
`;

export const Label = styled.div`
  display: inline;
  font-size: ${(props) => props.labelFontSize};
  margin-bottom: ${(props) => props.labelMarginBottom};
  line-height: ${(props) => props.labelLineHeight};
  font-weight: 600;

  ${media.mobile} {
    font-size: 14px;
  }
`;
