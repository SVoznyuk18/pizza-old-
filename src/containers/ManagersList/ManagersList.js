import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { handleToggleModal, getManagers, deleteManager } from 'ActionsRoot';
import { MODAL } from 'ConfigsRoot/constants';

import { Table, BassicButton, SvgIcon, Spiner } from 'ComponentsRoot';
import { ButtonSection } from './StyledComponents';
import iconSvg from 'AssetsRoot/svg/iconSvg';

const ManagersList = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { managers, loadingManager } = useSelector(state => state?.users);

    useEffect(() => {
        console.log('render');
        dispatch(getManagers());

    }, [dispatch]);

    const onDeleteManager = (id) => {
        dispatch(deleteManager({ id }));
    };

    return (
        <>
            <ButtonSection>
                <BassicButton
                    display='flex'
                    padding='10px'
                    width='auto'
                    backgroundColor="#ffff"
                    alignItems='center'
                    justifyContent='space-evenly'
                    fontWeight={600}
                    fontSize='18px'
                    onClick={() => dispatch(handleToggleModal(true, MODAL.NEW_MANAGER_FORM))}
                >
                    <SvgIcon
                        width='14px'
                        height='14px'
                        viewBox='0 0 9.6 9.6'
                        fill='#EB5A1E'
                        path={iconSvg.plus}
                        margin='0 5px 0 0'
                    />
                    {t('button.add')}
                </BassicButton>
            </ButtonSection>

            <Choose>
                <When condition={loadingManager}>
                    <Spiner />
                </When>
                <Otherwise>
                    <Table tableData={managers} handleDelete={onDeleteManager} />
                </Otherwise>
            </Choose>
        </>
    )
}

export default ManagersList;