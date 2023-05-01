import React, { useState, memo } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { addPizzaToCart } from 'ActionsRoot';

import { Selector, BassicButton, SvgIcon } from 'ComponentsRoot';
import { PizzaBlock, PizzaImg, Title, SelectorSection, BottomSection, Price, EditWrapper } from "./StyledComponents";
import iconSvg from 'AssetsRoot/svg/iconSvg';


const PizzaItem = ({ pizzaItem, avaliableTypes, avaliableSizes, editProduct }) => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [selectType, setSelectType] = useState("thin");
    const [selectSize, setSelectSize] = useState('26');

    const orderConfig = (pizzaId) => ({
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
                width="100%"
            />
            <Title>{t(`pizzaName.${pizzaItem?.name}`)}</Title>
            <SelectorSection>
                <Selector avaliableItems={avaliableTypes} handleSelect={setSelectType} types={pizzaItem?.types} selectedType={selectType} />
                <Selector avaliableItems={avaliableSizes} handleSelect={setSelectSize} types={pizzaItem?.sizes} selectedType={selectSize} selectorType='size' />
            </SelectorSection>
            <BottomSection>
                <Price>{`${t('common.from')} ${t('common.cost', { cost: pizzaItem?.price })}`}</Price>
                <If condition={!editProduct}>
                    <BassicButton
                        display='flex'
                        padding='10px'
                        width='auto'
                        backgroundColor="#ffff"
                        alignItems='center'
                        justifyContent='space-evenly'
                        fontWeight={600}
                        fontSize='18px'
                        onClick={() => dispatch(addPizzaToCart(orderConfig(`${pizzaItem?.id}_${selectSize}_${selectType}`)))}
                    >
                        <SvgIcon
                            width='14px'
                            height='14px'
                            viewBox='0 0 9.6 9.6'
                            path={iconSvg.plus}
                            fill='#EB5A1E'
                            fillHover='#fff'
                            margin='0 5px 0 0'
                        />
                        {t('button.add')}
                    </BassicButton>
                </If>
            </BottomSection>
            <If condition={editProduct}>
                <EditWrapper>
                    <BassicButton
                        display='flex'
                        padding='10px'
                        width='auto'
                        backgroundColor="#ffff"
                        alignItems='center'
                        justifyContent='space-evenly'
                        fontWeight={600}
                        fontSize='18px'
                    // onClick={() => dispatch(addPizzaToCart(orderConfig(`${pizzaItem?.id}_${selectSize}_${selectType}`)))}
                    >
                        <SvgIcon
                            width='14px'
                            height='14px'
                            viewBox='0 0 9.6 9.6'
                            path={iconSvg.plus}
                            fill='#EB5A1E'
                            fillHover='#fff'
                            margin='0 5px 0 0'
                        />
                        {t('button.add')}
                    </BassicButton>
                </EditWrapper>
            </If>
        </PizzaBlock>
    )
};

PizzaItem.propTypes = {
    pizzaItem: PropTypes.shape({
        amountPizzas: PropTypes.number,
        id: PropTypes.number,
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        sizes: PropTypes.arrayOf(PropTypes.string),
        types: PropTypes.arrayOf(PropTypes.string)
    }),
    avaliableTypes: PropTypes.arrayOf(PropTypes.string),
    avaliableSizes: PropTypes.arrayOf(PropTypes.string),
    editProduct: PropTypes.bool
};

PizzaItem.defaultProps = {
    pizzaItem: {},
    avaliableTypes: [],
    avaliableSizes: [],
    editProduct: false
}

export default memo(PizzaItem);