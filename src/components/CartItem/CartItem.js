import { memo } from "react";

import { BassicButton, Img, SVG } from '../index';
import { CarItemWrapper, CartItemInfo, CountSection, PriceSection, RemoveSection, IconCustom } from './StyledComponents';
import iconSvg from '../../assets/svg/iconSvg';

const CartItem = (props) => {
    const { cartItem, onIncPizzaAmount, onDecPizzaAmount, onDeletePizzaItem } = props;

    return (
        <CarItemWrapper>
            <Img
                width="80px"
                height="80px"
                margin="0 15px 0 0"
                src={cartItem.imageUrl}
                alt="Pizza"
            />
            <CartItemInfo>
                <h3>{cartItem.name}</h3>
                <p>{`${cartItem.type}, ${cartItem.size} см.`}</p>
            </CartItemInfo>
            <CountSection>
                <BassicButton
                    width="32px"
                    height="32px"
                    padding="initial"
                    hoverBackgroundColor='#fe5f1e'
                    onClick={() => onDecPizzaAmount(cartItem)}
                >
                    <IconCustom
                        width='100%'
                        height='100%'
                        fill='#EB5A1E'
                        fillHover='#fff'
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
                    hoverBackgroundColor='#fe5f1e'
                    onClick={() => onIncPizzaAmount(cartItem)}
                >
                    <IconCustom
                        width='100%'
                        height='100%'
                        fill='#EB5A1E'
                        fillHover='#fff'
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
                <b>{`${cartItem.amountPizzas * cartItem.price} ₽`}</b>
            </PriceSection>
            <RemoveSection>
                <BassicButton
                    width="32px"
                    height="32px"
                    padding="initial"
                    hoverBackgroundColor='#fe5f1e'
                    onClick={() => onDeletePizzaItem(cartItem)}
                >
                    <IconCustom
                        width='100%'
                        height='100%'
                        fill='#EB5A1E'
                        fillHover='#fff'
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
}

export default memo(CartItem);