import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {getOrders} from 'ActionsRoot';

import { Accordion } from 'ComponentsRoot';
import { OredersWrapper } from './StyledComponents';

const Orders = () => {
    const [activeId, setActiveId] = useState(null);

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {orders} = useSelector(state => state.orders);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    return (
        <>
            <h1>orders</h1>
            <Choose>
                <When condition={orders.length > 0}>
                    {orders.map(order => (
                        <Accordion 
                            key={order?.orderId}
                            isOpen={order?.orderId === activeId}
                            setActiveId={setActiveId}
                            order={order}
                        />
                    ))}
                </When>
                <Otherwise>

                </Otherwise>
            </Choose>
        </>
    )
}

export default Orders;