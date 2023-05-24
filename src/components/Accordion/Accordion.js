import React from "react";
import { useTranslation } from 'react-i18next';

import { CartItem, SvgIcon } from 'ComponentsRoot';

import { AccordionWrapper, AccordionItem, AccordionHeader, AccordionBody, AccordionContent, HeaderItem, Order, OrderInfoSection, OrderInfoItem, OrderCartSection, OrderPriceSection} from './StyledComponents';

const Accordion = ({ isOpen, setActiveId, order }) => {

    console.log('order', order);
    const { t } = useTranslation();

    return (
        <AccordionWrapper>
            <AccordionItem>
                <AccordionHeader onClick={() => setActiveId(order?.orderId)}>
                    <HeaderItem>{order?.clientInfo?.name}</HeaderItem>
                    <HeaderItem>{order?.clientInfo?.phone}</HeaderItem>
                    <HeaderItem>{order?.clientInfo?.email}</HeaderItem>
                </AccordionHeader>
                <AccordionBody isOpenContent={isOpen}>
                    <AccordionContent>
                        <Order>
                            <OrderInfoSection>
                                <OrderInfoItem>{`name: ${order?.clientInfo?.name}`}</OrderInfoItem>
                                <OrderInfoItem>{`phone: ${order?.clientInfo?.phone}`}</OrderInfoItem>
                                <OrderInfoItem>{`email: ${order?.clientInfo?.email}`}</OrderInfoItem>
                                <OrderInfoItem>{`delivery date ${order?.clientInfo?.time}`}</OrderInfoItem>
                                <OrderInfoItem>{`Adress ${order?.clientInfo?.street} street., ${order?.clientInfo?.house}, ${order?.clientInfo?.apartment}, ap`}</OrderInfoItem>

                            </OrderInfoSection>
                            <OrderCartSection>
                                {
                                    order?.orderInfo?.order.map((item, index) => {
                                        return <CartItem 
                                            key={index}
                                            cartItem={item} 
                                            // onIncPizzaAmount={onIncPizzaAmount} 
                                            // onDecPizzaAmount={onDecPizzaAmount} 
                                            // onDeletePizzaItem={onDeletePizzaItem} 
                                        />
                                    })
                                }
                            </OrderCartSection>
                            <OrderPriceSection>
                                <span> {t('amoutPizzas')} <b>{t('common.amount', { amount: order?.orderInfo?.totalAmount })}</b></span>
                                <span> {t('orderPrice')} <b>{t('common.cost', { cost: order?.orderInfo?.totalPrice })}</b> </span>
                            </OrderPriceSection>
                        </Order>
                    </AccordionContent>
                </AccordionBody>
            </AccordionItem>
        </AccordionWrapper>
    )


}

export default Accordion;