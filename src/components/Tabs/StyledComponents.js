import styled from "styled-components";

export const TabsWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const TabsNav = styled.div`

    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Tab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1 1 200px;
    box-shadow: ${props => (props.isActive ?  '0px 2px 5px 2px #fe5f1e' : 'none')}
`;

export const TabsContent = styled.div`
    padding: 40px 0 0;
    width: 100%;
    height: auto;
`;