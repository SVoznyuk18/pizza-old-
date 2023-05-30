import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { handleToggleModal, deleteManager } from 'ActionsRoot';
import { MODAL } from 'ConfigsRoot/constants';

import {
  Table,
  BassicButton,
  SvgIcon,
  Spiner,
} from 'ComponentsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { ButtonSection } from './StyledComponents';

const ManagersList = ({ headerArr, managers, loadingManager }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onDeleteManager = (id) => {
    dispatch(deleteManager({ id }));
  };

  return (
    <>
      <ButtonSection>
        <BassicButton
          padding="10px"
          width="auto"
          backgroundColor="#ffff"
          alignItems="center"
          justifyContent="space-evenly"
          fontWeight={600}
          fontSize="18px"
          onClick={() => dispatch(handleToggleModal(true, MODAL.NEW_MANAGER_FORM))}
        >
          <SvgIcon
            width="14px"
            height="14px"
            viewBox="0 0 9.6 9.6"
            fill="#EB5A1E"
            path={iconSvg.plus}
            margin="0 5px 0 0"
          />
          {t('button.add')}
        </BassicButton>
      </ButtonSection>
      <Choose>
        <When condition={loadingManager}>
          <Spiner />
        </When>
        <Otherwise>
          <Table tableData={managers} handleDelete={onDeleteManager} header={headerArr} />
        </Otherwise>
      </Choose>
    </>
  );
};

ManagersList.propTypes = {
  headerArr: PropTypes.arrayOf(PropTypes.string),
  managers: PropTypes.arrayOf(PropTypes.shape({
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    role: PropTypes.string,
  })),
  loadingManager: PropTypes.bool,
};

ManagersList.defaultProps = {
  headerArr: [''],
  managers: [{
    avatarUrl: '',
    email: '',
    id: '',
    name: '',
    phone: '',
    role: '',
  }],
  loadingManager: false,
};

export default memo(ManagersList);
