import React, { useState, memo } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import {filterCategory} from '../../redux/actions';

import { CategoriesWrapper, CategoriesLabel, CategoriesListPopUp, CategoriesList, ListItem, ListItemActive } from './StyledComponents';

const Categories = memo(({ handleDispatch, filterView }) => {
    const categories = ["all", "meat", "vegetarian", "grill", "spicy", "calzone"];
    const { t } = useTranslation();

    const [activeClass, setActiveClass] = useState(0);
    const [showList, setShowList] = useState(false);
    const [categoriesLabel, setCategoriesLabel] = useState(t(`categoriesPizza.all`));

    console.log(filterView);
    
    return (
        <CategoriesWrapper>
            <Choose>
                <When condition={filterView === 'popUp'}>
                    <CategoriesLabel onClick={() => setShowList(true)}>{categoriesLabel}</CategoriesLabel>
                    <CategoriesListPopUp showList={showList}>
                        {categories.map((item, index) => (
                            <Choose>
                                <When condition={activeClass === index}>
                                    <ListItemActive
                                            key={index} 

                                            onClick={() => {
                                                setActiveClass(index);
                                                handleDispatch(filterCategory(index));
                                                setCategoriesLabel(t(`categoriesPizza.${item}`));
                                                setShowList(false);
                                            }
                                            }
                                        >
                                            {t(`categoriesPizza.${item}`)}
                                    </ListItemActive>
                                </When>
                                <Otherwise>
                                    <ListItem
                                        key={index}
                                        showList={showList}
                                        onClick={() => {
                                            setActiveClass(index);
                                            handleDispatch(filterCategory(index));
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
                                <When condition={activeClass === index}>
                                    <ListItemActive
                                            key={index}
                                            onClick={() => {
                                                setActiveClass(index);
                                                handleDispatch(filterCategory(index));
                                            }
                                            }
                                        >
                                            {t(`categoriesPizza.${item}`)}
                                    </ListItemActive>
                                </When>
                                <Otherwise>
                                    <ListItem
                                        key={index}
                                        onClick={() => {
                                            setActiveClass(index);
                                            handleDispatch(filterCategory(index));
                                        }}
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
});

Categories.propTypes = {
    handleDispatch: PropTypes.func,
    filterView: PropTypes.string
};

Categories.defaultProps = {
    handleDispatch: () => {},
    filterView: 'default'
}

export default Categories;
