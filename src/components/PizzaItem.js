import { useState } from "react";
import { useDispatch } from "react-redux";

import { setPizzaCart } from "../redux/actions/cart";

const PizzaItem = (props) => {
    const { id, imageUrl, name, types, sizes, price } = props.pizzaItem;

    const avaliableTypes = ["тонкое", "традиционное"];
    const avaliableSizes = [26, 30, 40];

    const [selectType, setSelectType] = useState(0);
    const [selectSize, setSelectSize] = useState(26)
    const dispatch = useDispatch();

    const onSelectType = (index) => {
        setSelectType(index);
    }

    const onSelectSize = (size) => {
        setSelectSize(size);
    }

    const addItemToCart = () => {
        const order = {
            id,
            imageUrl,
            name,
            type: avaliableTypes[selectType],
            size: selectSize,
            price
        }
        dispatch(setPizzaCart(order));
    }
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt={`pizza ${name}`}
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {avaliableTypes.map((type, index) => {
                        return (
                            <li className={
                                `   ${!types.includes(index) ? "disabled" : ""}
                                    ${selectType === index ? "active" : ""}
                                `
                            }
                                key={type}
                                onClick={() => onSelectType(index)}
                            >{type}</li>
                        )
                    })}
                </ul>
                <ul>
                    {avaliableSizes.map((size, index) => {
                        return (
                            <li className={
                                `   ${!sizes.includes(size) ? "disabled" : ""}
                                    ${selectSize === size ? "active" : ""} 
                                `
                            }
                                key={size}
                                onClick={() => onSelectSize(size)}
                            >{`${size} см.`}</li>
                        )
                    })}

                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{`от ${price} ₽`}</div>
                <div className="button button--outline button--add"
                    onClick={() => addItemToCart()}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    )
}

export default PizzaItem;