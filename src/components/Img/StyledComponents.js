import styled from 'styled-components';

export const ImgWrapper = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
`;
