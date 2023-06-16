import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { colors } from 'ConfigsRoot/colors';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { SvgIcon } from 'ComponentsRoot';
import { Wrapper, Title } from './StyledComponents';

const StatusModal = ({ params }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Choose>
        <When condition={params?.status === 'success'}>
          <SvgIcon
            width="50px"
            height="50px"
            viewBox="0 0 490 490"
            fill={colors.green}
            path={iconSvg.check}
          />
        </When>
        <Otherwise>
          <SvgIcon
            width="50px"
            height="50px"
            viewBox="55 45 410 410"
            fill={colors.errorMessage}
            path={iconSvg.failure}
          />
        </Otherwise>
      </Choose>
      <Title>{ params?.status === 'success' ? t('modal.success') : t('modal.failure')}</Title>
    </Wrapper>
  );
};

StatusModal.propTypes = {
  params: PropTypes.shape({
    status: PropTypes.string,
  }).isRequired,
};

export default StatusModal;
