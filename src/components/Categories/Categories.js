import { useState, memo } from "react";
import { filterCategory } from "../../redux/actions/filter";

import {CategoriesWrapper, CategoriesList, ListItem, ListItemActive} from './StyledComponents';

const Categories = ({handleDispatch}) => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    const [activeClass, setActiveClass] = useState(0)

    return (
        <CategoriesWrapper>
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
                            {item}
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
                        {item}
                    </ListItem>
                )
            })}
            </CategoriesList>
        </CategoriesWrapper>
    )
}

export default memo(Categories);
