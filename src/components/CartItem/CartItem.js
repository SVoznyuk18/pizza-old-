import React, { memo } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import { BassicButton, Img, SVG } from 'ComponentsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { colors } from "ConfigsRoot/colors";
import { CarItemWrapper, CartItemInfo, CountSection, PriceSection, RemoveSection, IconCustom, ControlsWrapper, CartImgWrapper } from './StyledComponents';

const CartItem = ({ cartItem, onIncPizzaAmount, onDecPizzaAmount, onDeletePizzaItem }) => {
    const { t } = useTranslation();
    return (
        <CarItemWrapper>
            <CartImgWrapper>
                <Img
                    width="100%"
                    height="100%"
                    src={cartItem?.imageUrl}
                    alt="Pizza"
                />
            </CartImgWrapper>

            <CartItemInfo>
                <h3>{t(`pizzaName.${cartItem?.name}`)}</h3>
                <p> {`${t(`pizzaType.${cartItem?.type}`)}, ${t('common.size', { size: cartItem?.size })}`}</p>
            </CartItemInfo>
            <ControlsWrapper>
                <CountSection>
                    <BassicButton
                        width="32px"
                        height="32px"
                        padding="initial"
                        margin="0 10px 0 0 "
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
                        margin="0 10px 0 10px"
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
                    <b>{t('common.cost', { cost: cartItem?.amountPizzas * cartItem?.price })}</b>
                </PriceSection>
                <RemoveSection>
                    <BassicButton
                        width="32px"
                        height="32px"
                        padding="initial"
                        margin="0 0 0 10px"
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
    onDeletePizzaItem: () => { }
}

export default memo(CartItem);