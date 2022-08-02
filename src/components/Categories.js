import { useState, memo } from "react";
import { filterCategory } from "../redux/actions/filter";
import { useDispatch } from "react-redux";

const Categories = () => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    const [activeClass, setActiveClass] = useState(0)
    const dispatch = useDispatch();

    return (
        <div className="categories">
            <ul>
                {categories.map((item, index) => {
                    return (
                        <li
                            className={activeClass === index ? "active" : ""}
                            key={index}
                            onClick={
                                () => {
                                    setActiveClass(index);
                                    dispatch(filterCategory(index));
                                }
                            }
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default memo(Categories);


