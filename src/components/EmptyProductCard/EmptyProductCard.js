import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import iconSvg from 'AssetsRoot/svg/iconSvg';
// eslint-disable-next-line import/no-cycle
import { BassicButton, SvgIcon } from 'ComponentsRoot';
import { EmptyBlock } from './StyledComponents';

const EmptyProductCard = ({ handleOpenModal }) => {
  const { t } = useTranslation();

  return (
    <EmptyBlock>
      <BassicButton
        display="flex"
        padding="10px"
        width="auto"
        backgroundColor="#ffff"
        alignItems="center"
        justifyContent="space-evenly"
        fontWeight={600}
        fontSize="18px"
        onClick={() => handleOpenModal()}
      >
        <SvgIcon
          width="14px"
          height="14px"
          viewBox="0 0 9.6 9.6"
          path={iconSvg.plus}
          fill="#EB5A1E"
          fillHover="#fff"
          margin="0 5px 0 0"
        />
        {t('button.add')}
      </BassicButton>
    </EmptyBlock>
  );
};

EmptyProductCard.propTypes = {
  handleOpenModal: PropTypes.func,
};

EmptyProductCard.defaultProps = {
  handleOpenModal: () => {},
};

export default EmptyProductCard;
