import { memo } from "react";

import Img from '../Img/Img';
import BassicButton from '../BassicButton/BassicButton';

import {CarItemWrapper, CartItemInfo, CountSection, PriceSection, RemoveSection} from './StyledComponents';
import minus from '../../assets/svg/minus.svg';
import plus from '../../assets/svg/plus.svg';
import cancel from '../../assets/svg/cancel.svg';

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
                    onClick={() => onDecPizzaAmount(cartItem)}
                >
                    <Img
                        src={minus}
                        alt="Minus"
                    />
                </BassicButton>
                <b>{cartItem.amountPizzas}</b>
                <BassicButton 
                    width="32px"
                    height="32px"
                    padding="initial"
                    onClick={() => { onIncPizzaAmount(cartItem)}}
                >
                    <Img
                        src={plus}
                        alt="plus"
                    />
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
                    onClick={()=> onDeletePizzaItem(cartItem)}
                >
                    <Img
                        src={cancel}
                        alt="cancel"
                    />
                </BassicButton>
            </RemoveSection>
        </CarItemWrapper>
    )
}

export default memo(CartItem);