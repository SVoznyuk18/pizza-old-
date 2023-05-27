import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { handleToggleModal, getManagers, deleteManager, getPizzaRequest } from 'ActionsRoot';
import { MODAL, AVALIABLE_TYPES, AVALIABLE_SIZES, } from 'ConfigsRoot/constants';

import {Wrapper} from './StyledComponents';
import { PizzaItem, EmptyProductCard } from 'ComponentsRoot';

const AddNewProduct = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { pizza, pizzaLoading, pizzaError } = useSelector(state => state.pizza);

    useEffect(() => {
        dispatch(getPizzaRequest());
    }, []);

    return(

       <Wrapper>
            {pizza.length && pizza.map(item => {
                return (<PizzaItem key={item.id} pizzaItem={item} avaliableTypes={AVALIABLE_TYPES} avaliableSizes={AVALIABLE_SIZES} editProduct />)
            })}
            <EmptyProductCard handleOpenModal={() => dispatch(handleToggleModal(true, MODAL.ADD_NEW_PRODUCT))}/>
       </Wrapper>
    )
}

export default AddNewProduct;