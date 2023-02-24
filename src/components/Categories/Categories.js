import React, { useState, memo } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import {filterCategory} from '../../redux/actions';

import { CategoriesList, ListItem, ListItemActive } from './StyledComponents';

const Categories = memo(({ handleDispatch }) => {
    const categories = ["all", "meat", "vegetarian", "grill", "spicy", "calzone"];

    const [activeClass, setActiveClass] = useState(0)
    const { t } = useTranslation();

    return (
        <CategoriesList>
            {categories.map((item, index) => {
                if (activeClass === index) {
                    return (
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
                    )
                }
                return (
                    <ListItem
                        key={index}
                        onClick={() => {
                            setActiveClass(index);
                            handleDispatch(filterCategory(index));
                        }
                        }
                    >
                        {t(`categoriesPizza.${item}`)}
                    </ListItem>
                )
            })}
        </CategoriesList>
    )
});

Categories.propTypes = {
    handleDispatch: PropTypes.func
};

Categories.defaultProps = {
    handleDispatch: () => {}
}

export default Categories;
