import styled from 'styled-components';

import { colors } from 'ConfigsRoot/colors';
import { media } from 'ConfigsRoot/constants';

export const EmptyBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 570px;
    min-width: 260px;
    margin: 0 10px 65px 10px;
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
