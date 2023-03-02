import React, { useState, memo } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import { sortBy } from "Actions";
import { SortWrapper, SortLabel, SortPopUp, SortList, SortItem } from './StyledComponents';

export const Sort = ({ sort, activeSort, handleDispatch }) => {

    const { t } = useTranslation();

    const [activeSortModal, setActiveSortModal] = useState(false);

    return (
        <SortWrapper
            onClick={() => setActiveSortModal(!activeSortModal)}
        >
            <SortLabel>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>{t('sort.sortTitle')}</b>
                <span> {t(`sort.${activeSort}`)}</span>
            </SortLabel>
            <SortPopUp activePopUp={activeSortModal}>
                <SortList>
                    {
                        sort.map((item, index) => {
                            return (
                                <SortItem
                                    sortActive={activeSort === item ? true : false}
                                    key={index}
                                    onClick={() => handleDispatch(sortBy(item))}
                                >
                                    {t(`sort.${item}`)}
                                </SortItem>
                            )
                        })
                    }
                </SortList>
            </SortPopUp>
        </SortWrapper>
    );
}

Sort.propTypes = {
    sort: PropTypes.arrayOf(PropTypes.string),
    activeSort: PropTypes.string.isRequired,
    handleDispatch: PropTypes.func
};

Sort.defaultProps = {
    sort: [],
    handleDispatch: () => { }
}

export default memo(Sort);