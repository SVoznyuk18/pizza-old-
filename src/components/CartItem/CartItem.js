import React, { memo } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import { BassicButton, Img, SvgIcon } from 'ComponentsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { colors } from "ConfigsRoot/colors";
import { CarItemWrapper, CartItemInfo, CountSection, PriceSection, RemoveSection, ControlsWrapper, CartImgWrapper } from './StyledComponents';

const CartItem = ({ cartItem, type, onIncPizzaAmount, onDecPizzaAmount, onDeletePizzaItem }) => {
    const { t } = useTranslation();
    return (
        <CarItemWrapper type={type}>
            <CartImgWrapper type={type}>
                <Img
                    width="100%"
                    height="100%"
                    src={cartItem?.imageUrl}
                    alt="Pizza"
                    
                />
            </CartImgWrapper>
            <CartItemInfo type={type}>
                <h3>{t(`pizzaName.${cartItem?.name}`)}</h3>
                <p> {`${t(`pizzaType.${cartItem?.type}`)}, ${t('common.size', { size: cartItem?.size })}`}</p>
            </CartItemInfo>
            <ControlsWrapper type={type}>
                <CountSection type={type}>
                    <BassicButton
                        width={type === 'orders' ? '20px' : '32px'}
                        height={type === 'orders' ? '20px' : '32px'}
                        padding="initial"
                        margin="0 10px 0 0 "
                        backgroundColor={colors.white}
                        hoverBackgroundColor={colors.orange}
                        borderColor={colors.orange}
                        onClick={() => onDecPizzaAmount(cartItem)}
                    >
                        <SvgIcon
                            width='100%'
                            height='10px'
                            viewBox='0 0 10 10'
                            path={iconSvg.minus}
                            fill={colors.orange}
                            fillHover={colors.white}
                        />
                    </BassicButton>
                    <b>{cartItem.amountPizzas}</b>
                    <BassicButton
                        width={type === 'orders' ? '20px' : '32px'}
                        height={type === 'orders' ? '20px' : '32px'}
                        padding="initial"
                        margin="0 10px 0 10px"
                        backgroundColor={colors.white}
                        hoverBackgroundColor={colors.orange}
                        borderColor={colors.orange}
                        onClick={() => onIncPizzaAmount(cartItem)}
                    >
                        <SvgIcon
                            width='100%'
                            height='10px'
                            viewBox='0 0 10 10'
                            path={iconSvg.plus}
                            fill={colors.orange}
                            fillHover={colors.white}
                        />
                    </BassicButton>
                </CountSection>
                <PriceSection type={type}>
                    <b>{t('common.cost', { cost: cartItem?.amountPizzas * cartItem?.price })}</b>
                </PriceSection>
                <RemoveSection>
                    <BassicButton
                        width={type === 'orders' ? '20px' : '32px'}
                        height={type === 'orders' ? '20px' : '32px'}
                        padding="initial"
                        margin="0 0 0 10px"
                        backgroundColor={colors.white}
                        hoverBackgroundColor={colors.orange}
                        borderColor={colors.orange}
                        onClick={() => onDeletePizzaItem(cartItem)}
                    >
                        <SvgIcon
                            width='100%'
                            height='10px'
                            viewBox='0 0 10 10'
                            path={iconSvg.cancel}
                            fill={colors.orange}
                            fillHover={colors.white}
                        />
                    </BassicButton>
                </RemoveSection>
            </ControlsWrapper>
        </CarItemWrapper>
    )
};

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
    onDeletePizzaItem: () => { },
    type: 'orders'
}

export default memo(CartItem);