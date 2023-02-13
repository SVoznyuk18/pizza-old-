import React, { useState, memo } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import {addPizzaToCart } from '../../redux/actions';

import { Selector, BassicButton, SVG } from '../index';
import { PizzaBlock, PizzaImg, Title, SelectorSection, BottomSection, IconCustom, Price } from "./StyledComponents";
import iconSvg from '../../assets/svg/iconSvg';

const PizzaItem = memo(({ pizzaItem }) => {

    const avaliableTypes = ["тонкое", "традиционное"];
    const avaliableSizes = ['26', '30', '40'];

    const [selectType, setSelectType] = useState("тонкое");
    const [selectSize, setSelectSize] = useState('26');
    const dispatch = useDispatch();

    const orderConfig = (pizzaId) =>({
        id: pizzaId,
        imageUrl: pizzaItem?.imageUrl,
        name: pizzaItem?.name,
        type: selectType,
        size: selectSize,
        price: pizzaItem?.price,
        amountPizzas: 1
    });

    return (
        <PizzaBlock>
            <PizzaImg
                src={pizzaItem?.imageUrl}
                alt={`pizza ${pizzaItem?.name}`}
                width="260px"
            />
            <Title>{pizzaItem?.name}</Title>
            <SelectorSection>
                <Selector avaliableItems={avaliableTypes} handleSelect={setSelectType} types={pizzaItem?.types} selectedType={selectType} />
                <Selector avaliableItems={avaliableSizes} handleSelect={setSelectSize} types={pizzaItem?.sizes} selectedType={selectSize} />
            </SelectorSection>
            <BottomSection>
                <Price>{`от ${pizzaItem?.price} ₽`}</Price>
                <BassicButton
                    display='flex'
                    padding='10px 20px'
                    width='130px'
                    backgroundColor="#ffff"
                    alignItems='center'
                    justifyContent='center'
                    fontWeight={600}
                    fontSize='16px'
                    onClick={() => dispatch(addPizzaToCart(orderConfig(`${pizzaItem?.id}_${selectSize}_${selectType}`)))}
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
        </PizzaBlock>

    )
});

PizzaItem.propTypes = {
    pizzaItem: PropTypes.shape({
        amountPizzas: PropTypes.number,
        id: PropTypes.number,
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        size: PropTypes.number,
        type: PropTypes.string
    })
};

PizzaItem.defaultProps = {
    cartItem: {}
}

export default PizzaItem;