import { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setPizzaCart, updatePizzaCartItem } from "../../redux/actions/cart";

import { Selector, BassicButton, SVG } from '../index';
import { PizzaBlock, PizzaImg, Title, SelectorSection, BottomSection, IconCustom, Price } from "./StyledComponents";
import iconSvg from '../../assets/svg/iconSvg';

const PizzaItem = (props) => {
    const { id, imageUrl, name, types, sizes, price } = props.pizzaItem;
    const { cart } = useSelector(state => state.cart)

    const avaliableTypes = ["тонкое", "традиционное"];
    const avaliableSizes = [26, 30, 40];

    const [selectType, setSelectType] = useState("тонкое");
    const [selectSize, setSelectSize] = useState(26);
    const dispatch = useDispatch();

    const addItemToCart = (pizzaId, arrCard) => {
        const order = {
            id: pizzaId,
            imageUrl,
            name,
            type: avaliableTypes[selectType],
            size: selectSize,
            price,
            amountPizzas: 1
        }
        if (arrCard.length !== 0) {
            const index = arrCard.findIndex(item => item.id === pizzaId)

            if (index !== -1) {
                order.amountPizzas = arrCard[index].amountPizzas + 1;
                dispatch(updatePizzaCartItem(order));
            } else {
                dispatch(setPizzaCart(order));
            }
        } else {
            dispatch(setPizzaCart(order));
        }
    }

    return (
        <PizzaBlock>
            <PizzaImg
                src={imageUrl}
                alt={`pizza ${name}`}
                width="260px"
            />
            <Title>{name}</Title>
            <SelectorSection>
                <Selector avaliableItems={avaliableTypes} handleSelect={setSelectType} types={types} selectedType={selectType} />
                <Selector avaliableItems={avaliableSizes} handleSelect={setSelectSize} types={sizes} selectedType={selectSize} />
            </SelectorSection>
            <BottomSection>
                <Price>{`от ${price} ₽`}</Price>
                <BassicButton 
                    display='flex'
                    padding='10px 20px'
                    width='130px'
                    backgroundColor="#ffff"
                    alignItems='center'
                    justifyContent='center'
                    fontWeight='600'
                    fontSize='16px'
                    onClick={() => addItemToCart(`${id}${selectSize}${selectType}`, cart)}
                >
                    <IconCustom
                        width='12px'
                        height='12px'
                        fill='#EB5A1E'
                        fillHover='#fff'
                        margin='0 2px 0 0'
                    >
                        <SVG
                            width='12'
                            height='12'
                            viewBox='0 0 10 10'
                            path={iconSvg.plus}
                        />
                    </IconCustom>
                    Добавить
                </BassicButton>
            </BottomSection>
            
            {/* <div className="pizza-block__bottom">
                <div className="pizza-block__price">{`от ${price} ₽`}</div>
                <div className="button button--outline button--add"
                    onClick={() => addItemToCart(`${id}${selectSize}${selectType}`, cart)}>
                      
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
                </div>
            </div> */}
        </PizzaBlock>

    )
}

export default memo(PizzaItem);