import React, { memo } from "react";
import PropTypes from 'prop-types';

import { BassicButton, Img, SVG } from '../index';
import { CarItemWrapper, CartItemInfo, CountSection, PriceSection, RemoveSection, IconCustom } from './StyledComponents';
import iconSvg from '../../assets/svg/iconSvg';

import { colors } from "../../configs/colors";

const CartItem = memo(({ cartItem, onIncPizzaAmount, onDecPizzaAmount, onDeletePizzaItem }) => {

    return (
        <CarItemWrapper>
            <Img
                width="80px"
                height="80px"
                margin="0 15px 0 0"
                src={cartItem?.imageUrl}
                alt="Pizza"
            />
            <CartItemInfo>
                <h3>{cartItem?.name}</h3>
                <p>{`${cartItem?.type}, ${cartItem?.size} см.`}</p>
            </CartItemInfo>
            <CountSection>
                <BassicButton
                    width="32px"
                    height="32px"
                    padding="initial"
                    backgroundColor={colors.white}
                    hoverBackgroundColor={colors.orange}
                    borderColor={colors.orange}
                    onClick={() => onDecPizzaAmount(cartItem)}
                >
                    <IconCustom
                        width='100%'
                        height='100%'
                        fill={colors.orange}
                        fillHover={colors.white}
                    >
                        <SVG
                            width='10'
                            height='10'
                            viewBox='0 0 10 10'
                            path={iconSvg.minus}
                        />
                    </IconCustom>
                </BassicButton>
                <b>{cartItem.amountPizzas}</b>
                <BassicButton
                    width="32px"
                    height="32px"
                    padding="initial"
                    backgroundColor={colors.white}
                    hoverBackgroundColor={colors.orange}
                    borderColor={colors.orange}
                    onClick={() => onIncPizzaAmount(cartItem)}
                >
                    <IconCustom
                        width='100%'
                        height='100%'
                        fill={colors.orange}
                        fillHover={colors.white}
                    >
                        <SVG
                            width='10'
                            height='10'
                            viewBox='0 0 10 10'
                            path={iconSvg.plus}
                        />
                    </IconCustom>
                </BassicButton>
            </CountSection>
            <PriceSection>
                <b>{`${cartItem?.amountPizzas * cartItem?.price} ₽`}</b>
            </PriceSection>
            <RemoveSection>
                <BassicButton
                    width="32px"
                    height="32px"
                    padding="initial"
                    backgroundColor={colors.white}
                    hoverBackgroundColor={colors.orange}
                    borderColor={colors.orange}
                    onClick={() => onDeletePizzaItem(cartItem)}
                >
                    <IconCustom
                        width='100%'
                        height='100%'
                        fill={colors.orange}
                        fillHover={colors.white}
                    >
                        <SVG
                            width='10'
                            height='10'
                            viewBox='0 0 10 10'
                            path={iconSvg.cancel}
                        />
                    </IconCustom>
                </BassicButton>
            </RemoveSection>
        </CarItemWrapper>
    )
});

CartItem.propTypes = {
    cartItem: PropTypes.shape({
        amountPizzas: PropTypes.number,
        id: PropTypes.string,
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        size: PropTypes.string,
        type: PropTypes.string
    }),
    onIncPizzaAmount: PropTypes.func,
    onDecPizzaAmount: PropTypes.func,
    onDeletePizzaItem: PropTypes.func
}

CartItem.defaultProps = {
    cartItem: {},
    onIncPizzaAmount: () => { },
    onDecPizzaAmount: () => { },
    onDeletePizzaItem: () => { }
}

export default CartItem;