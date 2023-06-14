import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-cycle
import {
  Selector,
  BassicButton,
  SvgIcon,
  Img,
} from 'ComponentsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import errorImg from 'AssetsRoot/img/noImage.png';
import loadingImg from 'AssetsRoot/svg/spinerLoading.svg';
import {
  PizzaBlock,
  Title,
  SelectorSection,
  BottomSection,
  Price,
  EditWrapper,
} from './StyledComponents';

const PizzaItem = ({
  pizzaItem,
  avaliableTypes,
  avaliableSizes,
  editProduct,
  handleAddPizzaToCart,
}) => {
  const { t } = useTranslation();

  const [selectType, setSelectType] = useState('thin');
  const [selectSize, setSelectSize] = useState('26');

  const orderConfig = (id) => ({
    id,
    imageUrl: pizzaItem?.imageUrl,
    name: pizzaItem?.name,
    type: selectType,
    size: selectSize,
    price: pizzaItem?.price,
    amountPizzas: 1,
  });

  return (
    <PizzaBlock>
      <Img
        src={pizzaItem?.imageUrl}
        alt={`pizza ${pizzaItem?.name}`}
        errorImg={errorImg}
        loadingImg={loadingImg}
        width="100%"
      />
      <Title>{t(`pizzaName.${pizzaItem?.name}`)}</Title>
      <SelectorSection>
        <Selector
          avaliableItems={avaliableTypes}
          handleSelect={setSelectType}
          types={pizzaItem?.types}
          selectedType={selectType}
        />
        <Selector
          avaliableItems={avaliableSizes}
          handleSelect={setSelectSize}
          types={pizzaItem?.sizes}
          selectedType={selectSize}
          selectorType="size"
        />
      </SelectorSection>
      <BottomSection>
        <Price>{`${t('common.from')} ${t('common.cost', { cost: pizzaItem?.price })}`}</Price>
        <If condition={!editProduct}>
          <BassicButton
            display="flex"
            padding="10px"
            width="auto"
            backgroundColor="#ffff"
            alignItems="center"
            justifyContent="space-evenly"
            fontWeight={600}
            fontSize="18px"
            onClick={() => handleAddPizzaToCart(orderConfig(`${pizzaItem?.name}_${selectSize}_${selectType}`))}
          >
            <SvgIcon
              width="14px"
              height="14px"
              viewBox="0 0 9.6 9.6"
              path={iconSvg.plus}
              fill="#EB5A1E"
              fillHover="#fff"
              margin="0 5px 0 0"
            />
            {t('button.add')}
          </BassicButton>
        </If>
      </BottomSection>
      <If condition={editProduct}>
        <EditWrapper>
          <BassicButton
            display="flex"
            padding="10px"
            width="auto"
            backgroundColor="#ffff"
            alignItems="center"
            justifyContent="space-evenly"
            fontWeight={600}
            fontSize="18px"
        // eslint-disable-next-line max-len
        // onClick={() => dispatch(addPizzaToCart(orderConfig(`${pizzaItem?.id}_${selectSize}_${selectType}`)))}
          >
            <SvgIcon
              width="14px"
              height="14px"
              viewBox="0 0 9.6 9.6"
              path={iconSvg.plus}
              fill="#EB5A1E"
              fillHover="#fff"
              margin="0 5px 0 0"
            />
            {t('button.add')}
          </BassicButton>
        </EditWrapper>
      </If>
    </PizzaBlock>
  );
};

PizzaItem.propTypes = {
  pizzaItem: PropTypes.shape({
    amountPizzas: PropTypes.number,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    sizes: PropTypes.arrayOf(PropTypes.string),
    types: PropTypes.arrayOf(PropTypes.string),
  }),
  avaliableTypes: PropTypes.arrayOf(PropTypes.string),
  avaliableSizes: PropTypes.arrayOf(PropTypes.string),
  editProduct: PropTypes.bool,
  handleAddPizzaToCart: PropTypes.func,
};

PizzaItem.defaultProps = {
  pizzaItem: {},
  avaliableTypes: [],
  avaliableSizes: [],
  editProduct: false,
  handleAddPizzaToCart: () => {},
};

export default memo(PizzaItem);
