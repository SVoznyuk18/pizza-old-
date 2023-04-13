import React, { useState, memo } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { filterCategory } from 'ActionsRoot';

import { CategoriesWrapper, CategoriesLabel, CategoriesListPopUp, CategoriesList, ListItem, ListItemActive } from './StyledComponents';

const Categories = ({ handleDispatch, filterView, categories, activeCategory }) => {
    const { t } = useTranslation();

    const [showList, setShowList] = useState(false);
    const [categoriesLabel, setCategoriesLabel] = useState(t(`categoriesPizza.${activeCategory}`));

    return (
        <CategoriesWrapper>
            <Choose>
                <When condition={filterView === 'popUp'}>
                    <CategoriesLabel onClick={() => setShowList(true)}>{categoriesLabel}</CategoriesLabel>
                    <CategoriesListPopUp showList={showList}>
                        {categories.map((item, index) => (
                            <Choose>
                                <When condition={activeCategory === item?.toLowerCase()}>
                                    <ListItemActive
                                        key={index}
                                        onClick={() => {
                                            handleDispatch(filterCategory(item));
                                            setCategoriesLabel(t(`categoriesPizza.${item}`));
                                            setShowList(false);
                                        }}
                                    >
                                        {t(`categoriesPizza.${item}`)}
                                    </ListItemActive>
                                </When>
                                <Otherwise>
                                    <ListItem
                                        key={index}
                                        showList={showList}
                                        onClick={() => {
                                            handleDispatch(filterCategory(item));
                                            setCategoriesLabel(t(`categoriesPizza.${item}`));
                                            setShowList(false);
                                        }}
                                    >
                                        {t(`categoriesPizza.${item}`)}
                                    </ListItem>
                                </Otherwise>
                            </Choose>
                        ))}
                    </CategoriesListPopUp>
                </When>
                <Otherwise>
                    <CategoriesList>
                        {categories.map((item, index) => (
                            <Choose>
                                <When condition={activeCategory === item?.toLowerCase()}>
                                    <ListItemActive
                                        key={index}
                                        onClick={() => handleDispatch(filterCategory(item))}
                                    >
                                        {t(`categoriesPizza.${item}`)}
                                    </ListItemActive>
                                </When>
                                <Otherwise>
                                    <ListItem
                                        key={index}
                                        onClick={() => handleDispatch(filterCategory(item))}
                                    >
                                        {t(`categoriesPizza.${item}`)}
                                    </ListItem>
                                </Otherwise>
                            </Choose>
                        ))}
                    </CategoriesList>
                </Otherwise>
            </Choose>
        </CategoriesWrapper>
    )
};

Categories.propTypes = {
    handleDispatch: PropTypes.func,
    filterView: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    activeCategory: PropTypes.string.isRequired
};

Categories.defaultProps = {
    handleDispatch: () => { },
    filterView: 'default',
    categories: []
}

export default memo(Categories);
