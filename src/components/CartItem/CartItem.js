/* eslint-disable no-unsafe-optional-chaining */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line import/no-cycle
import { BassicButton, Img, SvgIcon } from 'ComponentsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { colors } from 'ConfigsRoot/colors';
import {
  CartItemWrapper,
  CountSection,
  CartItemInfo,
  PriceSection,
  RemoveSection,
  ControlsWrapper,
  CartImgWrapper,
} from './StyledComponents';

const CartItem = ({
  data,
  type,
  onIncPizzaAmount,
  onDecPizzaAmount,
  onDeletePizzaItem,
}) => {
  const { t } = useTranslation();

  return (
    <CartItemWrapper type={type}>
      <CartImgWrapper type={type}>
        <Img width="100%" height="100%" src={data?.imageUrl} alt="Pizza" />
      </CartImgWrapper>
      <CartItemInfo type={type}>
        <h3>{t(`pizzaName.${data?.name}`)}</h3>
        <p>
          {`${t(`pizzaType.${data?.type}`)}, ${t('common.size', { size: data?.size })}`}
        </p>
      </CartItemInfo>
      <ControlsWrapper type={type}>
        <CountSection type={type}>
          <BassicButton
            width={type === 'orders' ? '20px' : '32px'}
            height={type === 'orders' ? '20px' : '32px'}
            padding="initial"
            margin="0 10px 0 0"
            backgroundColor={colors.white}
            hoverBackgroundColor={colors.orange}
            borderColor={colors.orange}
            onClick={onDecPizzaAmount}
          >
            <SvgIcon
              width="100%"
              height="10px"
              viewBox="0 0 10 10"
              path={iconSvg.minus}
              fill={colors.orange}
              fillHover={colors.white}
            />
          </BassicButton>
          <b>{data.amountPizzas}</b>
          <BassicButton
            width={type === 'orders' ? '20px' : '32px'}
            height={type === 'orders' ? '20px' : '32px'}
            padding="initial"
            margin="0 10px 0 10px"
            backgroundColor={colors.white}
            hoverBackgroundColor={colors.orange}
            borderColor={colors.orange}
            onClick={onIncPizzaAmount}
          >
            <SvgIcon
              width="100%"
              height="10px"
              viewBox="0 0 10 10"
              path={iconSvg.plus}
              fill={colors.orange}
              fillHover={colors.white}
            />
          </BassicButton>
        </CountSection>
        <PriceSection type={type}>
          <b>
            {t('common.cost', { cost: +data?.amountPizzas * +data?.price })}
          </b>
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
            onClick={onDeletePizzaItem}
          >
            <SvgIcon
              width="100%"
              height="10px"
              viewBox="0 0 10 10"
              path={iconSvg.cancel}
              fill={colors.orange}
              fillHover={colors.white}
            />
          </BassicButton>
        </RemoveSection>
      </ControlsWrapper>
    </CartItemWrapper>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    amountPizzas: PropTypes.number,
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  onIncPizzaAmount: PropTypes.func,
  onDecPizzaAmount: PropTypes.func,
  onDeletePizzaItem: PropTypes.func,
  type: PropTypes.string,
};

CartItem.defaultProps = {

  onIncPizzaAmount: () => {},
  onDecPizzaAmount: () => {},
  onDeletePizzaItem: () => {},
  type: '',
};

export default memo(CartItem);
